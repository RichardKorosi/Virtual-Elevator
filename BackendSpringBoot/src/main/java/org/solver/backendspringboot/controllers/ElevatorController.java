package org.solver.backendspringboot.controllers;

import lombok.Getter;
import org.solver.backendspringboot.objects.Elevator;
import org.solver.backendspringboot.objects.Floor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ElevatorController {
    Elevator elevator;
    List<Floor> floors;
    Floor operatorCurrentFloor;

    public ElevatorController() {
        elevator = new Elevator();
        floors = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Floor floor = new Floor();
            floor.setFloorNumber(i);
            if (i == 0) {
                operatorCurrentFloor = floor;
            }
            floors.add(floor);
        }
    }

    @GetMapping("/initialInfo")
    public InfoWrapper getInitialInfo() {
        return new InfoWrapper(elevator, floors, operatorCurrentFloor);
    }



    @GetMapping("/elevatorInfo")
    public Elevator getElevatorInfo() {
        return elevator;
    }

}
