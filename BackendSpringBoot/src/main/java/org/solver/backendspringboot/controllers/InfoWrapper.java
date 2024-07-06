package org.solver.backendspringboot.controllers;

import lombok.Getter;
import org.solver.backendspringboot.objects.Elevator;
import org.solver.backendspringboot.objects.Floor;

import java.util.List;

@Getter
public class InfoWrapper{
    private Elevator elevator;
    private List<Floor> floors;
    private Floor operatorCurrentFloor;
    public InfoWrapper(Elevator elevator, List<Floor> floors, Floor operatorCurrentFloor){
        this.elevator = elevator;
        this.floors = floors;
        this.operatorCurrentFloor = operatorCurrentFloor;
    }
}
