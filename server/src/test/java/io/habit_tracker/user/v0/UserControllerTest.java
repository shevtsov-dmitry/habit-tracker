package io.habit_tracker.user.v0;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.concurrent.atomic.AtomicReference;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@ExtendWith(MockitoExtension.class)
class UserControllerTest {

  public static final String API_PATH = "api/v0/users/";
  @Mock MockMvc mockMvc;

  @InjectMocks UserController userController;

  ObjectMapper objectMapper;

  User user;

  {
    user =
        User.builder()
            .id(null)
            .email("emailexample@mail.com")
            .name("name example")
            .sessions(null)
            .build();
  }

  @Test
  void createUser() throws Exception {
    String json = objectMapper.writeValueAsString(user);
    mockMvc
        .perform(post(API_PATH + "create").contentType(MediaType.APPLICATION_JSON).content(json))
        .andExpect(status().isCreated());
  }

  @Test
  void findCreatedUser_verifyFields() throws Exception {
    String json = objectMapper.writeValueAsString(user);
    mockMvc
        .perform(post(API_PATH + "create").contentType(MediaType.APPLICATION_JSON).content(json))
        .andExpect(status().isCreated());

    mockMvc
        .perform(get(API_PATH + "find").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.id").isNumber())
        .andExpect(jsonPath("$.name").value(user.getName()))
        .andExpect(jsonPath("$.email").value(user.getEmail()))
        .andExpect(jsonPath("$.sessions").isArray());
  }

  @Test
  void deleteUser() throws Exception {

    String json = objectMapper.writeValueAsString(user);
    mockMvc
        .perform(post(API_PATH + "create").contentType(MediaType.APPLICATION_JSON).content(json))
        .andExpect(status().isCreated());

    var getUserResult =
        mockMvc
            .perform(get(API_PATH + "find").contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andReturn();

    User savedUser =
        objectMapper.readValue(getUserResult.getResponse().getContentAsString(), User.class);

    mockMvc
        .perform(delete(API_PATH + "delete" + "/" + savedUser.getId()))
        .andExpect(status().isNoContent());
  }
}
