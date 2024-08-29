package com.example.demo.controller;

import com.example.demo.dto.request.PermissionRequest.PermissionRequest;
import com.example.demo.dto.request.UserRequest.ApiResponse;
import com.example.demo.dto.response.PermissionResponse;
import com.example.demo.service.PermissionService;
import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/permission")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Slf4j
public class PermissionController {
    PermissionService permissionService;

    @PostMapping
    public ApiResponse<PermissionResponse> CreatePermission(@RequestBody @Valid PermissionRequest permissionRequest) {
        ApiResponse<PermissionResponse> apiResponse = new ApiResponse<>();
        apiResponse.setResult(permissionService.CreatePermission(permissionRequest));
        return apiResponse;
    }

    @GetMapping
    public ApiResponse<List<PermissionResponse>> GetAllPermissions() {
        return ApiResponse.<List<PermissionResponse>>builder()
                .result(permissionService.getAll())
                .build();
    }

    @DeleteMapping("/${permissionId}")
    public ApiResponse<Void> DeletePermission(@PathVariable Long permissionId) {
        permissionService.DeletePermission(permissionId);
        return ApiResponse.<Void>builder().build();
    }
}
