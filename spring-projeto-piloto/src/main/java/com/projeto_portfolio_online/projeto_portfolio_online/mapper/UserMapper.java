package com.projeto_portfolio_online.projeto_portfolio_online.mapper;

import com.projeto_portfolio_online.projeto_portfolio_online.models.User;
import com.projeto_portfolio_online.projeto_portfolio_online.models.dto.UserDTO;

public interface UserMapper {
    UserDTO userDTO(User user);
}