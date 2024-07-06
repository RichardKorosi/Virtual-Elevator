package objects;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Elevator {
    private int movement;
    private boolean isDoorOpen;
    private int peopleInside;
    private int currentFloor;
    private List<Floor> floors;

    public Elevator() {
        this.movement = 0;
        this.isDoorOpen = false;
        this.peopleInside = 0;
        this.currentFloor = 0;
    }
}
