package io.habit_tracker.user.v0;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {


  @Autowired private MockMvc mockMvc;
  @Autowired private ObjectMapper objectMapper;

  public static String API_PATH;
  @Value("${DOMAIN_URL}")
  private String DOMAIN_URL;

  @BeforeEach
  void setUp() {
    API_PATH = DOMAIN_URL + "/" + "api/v0/users";
  }

  User user;

  {
    user =
        User.builder()
            .id(null)
            .email("emailexample@mail.com")
            .name("name example")
            .sessions(List.of())
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
