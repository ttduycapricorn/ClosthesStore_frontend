package com.example.demo.service;

import com.example.demo.dto.request.UserRequest.AuthenticationRequest;
import com.example.demo.dto.request.UserRequest.IntrospectTokenRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.dto.response.IntrospectTokenResponse;
import com.example.demo.entity.User;
import com.example.demo.exception.AppException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.respository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.experimental.NonFinal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.Date;
import java.util.StringJoiner;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class AuthenticationService {

    private static final Logger log = LoggerFactory.getLogger(AuthenticationService.class);

    UserRepository userRepository;

    @NonFinal
    @Value("${jwt.signerKey}")
    protected String SIGN_KEY;

    public IntrospectTokenResponse introspect(IntrospectTokenRequest request)
            throws ParseException, JOSEException {
        var token = request.getToken();

        JWSVerifier verifier = new MACVerifier(SIGN_KEY.getBytes());

        SignedJWT signedJWT = SignedJWT.parse(token);

        // kiểm tra token đã hết hạn hay không?
        Date expiration = signedJWT.getJWTClaimsSet().getExpirationTime();

        var isVerified = signedJWT.verify(verifier);

        return IntrospectTokenResponse.builder()
                .valid(isVerified && expiration.after(new Date()))
                .build();
    }

    public AuthenticationResponse authentication(AuthenticationRequest request) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        var user = userRepository.findByName(request.getName())
                 .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_EXISTS));

        boolean authentication = passwordEncoder.matches(request.getPassword(),
                user.getPassword());

        if (authentication) {
            throw new AppException(ErrorCode.AUTHENTICATED_FALSE);
        }
        else {
            var token = generateToken(user);

            return AuthenticationResponse.builder()
                    .token(token)
                    .authenticated(true)
                    .build();
        }
    }

    //create jwt
    private String generateToken(User user){
        JWSHeader header = new JWSHeader(JWSAlgorithm.HS512);

        JWTClaimsSet jwtClaimsSet = new JWTClaimsSet.Builder()
                .subject(user.getName())
                .issuer("devteria.com")
                .issueTime(new Date())
                .expirationTime(new Date(
                        Instant.now().plus(1, ChronoUnit.HOURS).toEpochMilli()
                ))
                .claim("scope", buildScope(user))
                .build();

        Payload payload = new Payload(jwtClaimsSet.toJSONObject());

        JWSObject jwsObject = new JWSObject(header, payload);
        try {
            jwsObject.sign(new MACSigner(SIGN_KEY));
            return jwsObject.serialize();
        } catch (JOSEException e) {
            log.error("{}Can't not create token", e.getMessage(), e);
            throw new RuntimeException(e);
        }
    }

    private String buildScope(User user){
        StringJoiner stringJoiner = new StringJoiner(" ");
//        if(!CollectionUtils.isEmpty(user.getRoles())){
//            user.getRoles().forEach(stringJoiner::add);
//        }
        return  stringJoiner.toString();
    }
}
