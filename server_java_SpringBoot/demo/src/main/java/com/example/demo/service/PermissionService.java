package com.example.demo.service;

import com.example.demo.dto.response.PermissionResponse;
import com.example.demo.mapper.PermissionMapper;
import com.example.demo.respository.PermissionRepository;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionService {
    PermissionRepository permissionRepository;

    @Autowired
    PermissionMapper permissionMapper;

//    public PermissionResponse CreatePermission(PermissionRequest request) {
//
//    }

    public List<PermissionResponse> getAll(){
        var permissions = permissionRepository.findAll();
        return permissions.stream().map(permissionMapper::toPermissionResponse).toList();
    }

    public void DeletePermission(Long permissionId) {
        permissionRepository.deleteById(permissionId);
    }
}
