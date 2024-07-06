package org.solver.backendspringboot.objects;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class Elevator {
    private int movement;
    private boolean isDoorOpen;
    private int peopleInside;
    private int currentFloor;

    public Elevator() {
        this.movement = 0;
        this.isDoorOpen = true;
        this.peopleInside = 0;
        this.currentFloor = 0;
    }
}
