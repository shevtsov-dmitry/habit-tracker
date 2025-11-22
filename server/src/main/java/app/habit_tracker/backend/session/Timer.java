package app.habit_tracker.backend.session;

import java.time.LocalDateTime;

public class Timer {

    private long id;
    private LocalDateTime time;

    String getTimeAsString(LocalDateTime localDateTime) {
        return String.format("%02d:%02d:%02d",
                localDateTime.getHour(),
                localDateTime.getMinute(),
                localDateTime.getSecond());
    }
}
