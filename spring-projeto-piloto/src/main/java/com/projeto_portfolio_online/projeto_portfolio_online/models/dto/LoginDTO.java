package com.projeto_portfolio_online.projeto_portfolio_online.models.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginDTO {
    @Schema(example = "user")
    @NotBlank
    private String username;

    @Schema(example = "user")
    @NotBlank
    private String password;
}
