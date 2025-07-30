package io.habit_tracker.session.v0;

import io.habit_tracker.user.v0.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Session {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(updatable = false)
  private LocalDateTime startTime;

  @Column(updatable = false)
  private LocalDateTime endTime;

  @ManyToOne(fetch = FetchType.LAZY)
  private User user;
}
