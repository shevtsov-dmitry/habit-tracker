package io.habit_tracker.user.v0;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
  Optional<User> findUserById(Long id);

  void deleteUserById(Long id);
}
