package io.habit_tracker.user.v0;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

  private final UserRepo userRepo;

  public UserService(UserRepo userRepo) {
    this.userRepo = userRepo;
  }

  public void createUser(User user) {
    userRepo.save(user);
  }

  public Optional<User> findUserById(Long id) {
    return userRepo.findUserById(id);
  }

  public void deleteUserById(Long id) {
    userRepo.deleteUserById(id);
  }
}
