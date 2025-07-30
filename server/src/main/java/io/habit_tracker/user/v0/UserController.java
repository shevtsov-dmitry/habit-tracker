package io.habit_tracker.user.v0;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v0/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  // === BASIC CRUD ===

  @PostMapping
  @RequestMapping("create")
  public ResponseEntity<Void> createUser(@RequestBody User user) {
    try {
      userService.createUser(user);
      return new ResponseEntity<>(HttpStatus.CREATED);
    } catch (RuntimeException exception) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

  @GetMapping
  @RequestMapping("find")
  public ResponseEntity<User> findUserById(@RequestParam Long id) {
    Optional<User> userWrapper = userService.findUserById(id);
    return userWrapper
        .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
  }

  @DeleteMapping
  @RequestMapping("delete")
  public ResponseEntity<Void> deleteUserById(@RequestParam Long id) {
    try {
      userService.deleteUserById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (RuntimeException e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

}
