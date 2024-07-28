package com.projeto_portfolio_online.projeto_portfolio_online.service.impl;

import lombok.RequiredArgsConstructor;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.projeto_portfolio_online.projeto_portfolio_online.exception.UserNotFoundException;
import com.projeto_portfolio_online.projeto_portfolio_online.models.User;
import com.projeto_portfolio_online.projeto_portfolio_online.repository.UserRepository;
import com.projeto_portfolio_online.projeto_portfolio_online.service.UserService;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private ModelMapper mapper;
    private final PasswordEncoder passwordEncoder;

    @Autowired

    public UserServiceImpl(UserRepository userRepository, ModelMapper mapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Boolean hasUserWithEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User validateAndGetUserByUsername(String username) {
        return getUserByUsername(username).orElseThrow(() -> new UserNotFoundException(String.format("NOT FOUND WITH NAME: %s", username)));
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}