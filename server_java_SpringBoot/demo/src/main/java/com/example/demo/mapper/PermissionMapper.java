package com.example.demo.mapper;

import com.example.demo.dto.request.PermissionRequest.PermissionRequest;
import com.example.demo.dto.response.PermissionResponse;
import com.example.demo.entity.Permission;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface PermissionMapper {
    Permission toPermission(PermissionRequest request);
    PermissionResponse toPermissionResponse(Permission permission);
}
