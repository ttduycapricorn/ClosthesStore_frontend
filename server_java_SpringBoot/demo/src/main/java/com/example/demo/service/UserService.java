package com.example.demo.service;

import com.example.demo.dto.request.UserRequest.UserCreationRequest;
import com.example.demo.dto.request.UserRequest.UserUpdateRequest;
import com.example.demo.entity.User;
import com.example.demo.enums.Role;
import com.example.demo.exception.AppException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.respository.UserRepository;

import lombok.*;
import lombok.experimental.FieldDefaults;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;

@Repository
@Service
@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {
    private static final Logger log = LoggerFactory.getLogger(UserService.class);
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    public User createUser(UserCreationRequest request) throws AppException {
        if(userRepository.existsByName(request.getName()))
            throw new AppException(ErrorCode.USER_ALREADY_EXISTS);

        User user = User.builder()
                .name(request.getName())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .phone(request.getPhone())
                .build();

        // add default role for user
        HashSet<String> roles = new HashSet<>();
        roles.add(Role.USER.name());
//        user.setRoles(roles);

        return userRepository.save(user);
   }

   public User updateUser(String id, UserUpdateRequest request) throws AppException {
        User user = userRepository.findById(id).orElseThrow(
                () -> new AppException(ErrorCode.USER_NOT_FOUND));
        user.setName(request.getName());
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        return userRepository.save(user);

   }

   public User deleteUser(long id) throws AppException {
       User user = userRepository.findById(String.valueOf(id)).orElseThrow(
               () -> new AppException(ErrorCode.USER_NOT_FOUND));
       userRepository.delete(user);
       return user;
   }

//   nếu name đã đăng nhập đúng với name be request thì mới vào được hàm này
   @PostAuthorize("returnObject.name == authentication.name")
   public User getUser(long id) throws AppException {
        log.info("In method getUser");
       User user =userRepository.findById(String.valueOf(id))
               .orElseThrow(() -> new AppException(ErrorCode.USER_NOT_FOUND));
       return user;
   }

   @PreAuthorize("hasRole('ADMIN')")
   public List<User> getAllUsers() throws AppException {
        log.info("In method getAllUsers") ;
       List<User> users = userRepository.findAll();
       return users;
   }


    public User getMyInfo() {
//        thông tin user đã đăng nhập đã được lưu vào trong này rồiii
       var context = SecurityContextHolder.getContext();
       String name =  context.getAuthentication().getName();
       User user = userRepository.findByName(name).orElseThrow(
               () -> new AppException(ErrorCode.USER_NOT_EXISTS));
       return user;
    }
}
