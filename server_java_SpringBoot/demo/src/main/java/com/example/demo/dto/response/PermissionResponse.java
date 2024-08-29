package com.example.demo.dto.response;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class PermissionResponse {
    String name;
    String description;
}
