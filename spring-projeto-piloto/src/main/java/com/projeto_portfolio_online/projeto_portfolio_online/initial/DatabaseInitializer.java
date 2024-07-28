package com.projeto_portfolio_online.projeto_portfolio_online.initial;

import com.projeto_portfolio_online.projeto_portfolio_online.models.User;
import com.projeto_portfolio_online.projeto_portfolio_online.security.WebSecurityConfig;
import com.projeto_portfolio_online.projeto_portfolio_online.service.impl.UserServiceImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final UserServiceImpl userService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        if (!userService.getAllUsers().isEmpty()) {
            return;
        }
        USERS.forEach(user -> {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userService.saveUser(user);
        });
        log.info("Database initialized");
    }

    private static final List<User> USERS = Arrays.asList(
            new User("admin", "admin@mycompany.com", "admin", "12345678901",WebSecurityConfig.ADMIN),
            new User("user", "user@mycompany.com", "user", "96385274111",WebSecurityConfig.USER),
            new User("aluno", "aluno@aluno.com", "aluno", "96385274110",WebSecurityConfig.USER),
            new User("prof", "prof@prof.com", "prof", "96385274112",WebSecurityConfig.ADMIN)
    );
}
