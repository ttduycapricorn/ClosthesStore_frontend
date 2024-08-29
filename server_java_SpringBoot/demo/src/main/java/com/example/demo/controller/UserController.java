package com.example.demo.controller;

import com.example.demo.dto.request.UserRequest.ApiResponse;
import com.example.demo.dto.request.UserRequest.UserCreationRequest;
import com.example.demo.dto.request.UserRequest.UserUpdateRequest;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);
    UserService userService;

    @PostMapping
    ApiResponse<User> createUser(@RequestBody @Valid UserCreationRequest userCreationRequest) {
        ApiResponse<User> apiResponse = new ApiResponse<>();
        apiResponse.setResult(userService.createUser(userCreationRequest));
        return apiResponse;
    }

    @GetMapping
    ApiResponse<Object> getUsers() {

        var getAuthentication = SecurityContextHolder.getContext().getAuthentication();

        log.info("Username : {}", getAuthentication.getName());
        getAuthentication.getAuthorities().forEach(
                grantedAuthority -> log.info("GrantedAuthority : {}", grantedAuthority));

        return  ApiResponse.builder()
                .result(userService.getAllUsers())
                .build();

//        return userService.getAllUsers();
    }

    @DeleteMapping("/{userId}")
    void deleteUser(@PathVariable long userId) {
        userService.deleteUser(userId);
    }

    @GetMapping("/{userId}")
    User getUser(@PathVariable long userId) {
        return userService.getUser(userId);
    }

    @PutMapping("/{userId}")
    User updateUser(@PathVariable long userId, @RequestBody @Valid UserUpdateRequest userUpdateRequest) {
        return userService.updateUser(String.valueOf(userId), userUpdateRequest);
    }

    @GetMapping("/myInfo")
    ApiResponse<Object> getMyInfo() {
        return ApiResponse.builder()
                .result(userService.getMyInfo())
                .build();
    }
}
