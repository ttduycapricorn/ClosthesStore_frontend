package com.example.demo.respository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, String> {
    boolean existsByName(String name);
    Optional<User> findByName(String name);
}
