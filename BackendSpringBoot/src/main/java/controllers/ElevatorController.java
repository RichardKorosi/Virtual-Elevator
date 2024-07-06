package controllers;

import objects.Elevator;
import objects.Floor;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ElevatorController {
    Elevator elevator;
    List<Floor> floors;

    public ElevatorController() {
        elevator = new Elevator();
        for (int i = 0; i < 10; i++) {
            Floor floor = new Floor();
            floor.setFloorNumber(i);
            floors.add(floor);
        }
    }
}
