package io.habit_tracker.user.v0;

import io.habit_tracker.session.v0.Session;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String email;

  @OneToMany
  @JoinColumn(name = "session_id")
  private List<Session> sessions;
}
