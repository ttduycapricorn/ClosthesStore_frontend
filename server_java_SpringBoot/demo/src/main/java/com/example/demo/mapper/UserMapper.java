package com.example.demo.mapper;

import com.example.demo.dto.request.UserRequest.UserCreationRequest;
import com.example.demo.dto.request.UserRequest.UserUpdateRequest;
import com.example.demo.dto.response.UserResponse;
import com.example.demo.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(source = "spring", target = "username")
    User toUser(UserCreationRequest userCreationRequest);
    UserResponse toUserResponse(User user);
    void updateUser(@MappingTarget User user, UserUpdateRequest userUpdateRequest);
}
