package org.solver.backendspringboot.objects;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Floor {
    private int floorNumber;
    private boolean continueUp;
    private boolean continueDown;
    private boolean isTarget;

    public Floor() {
        this.floorNumber = 0;
        this.continueUp = false;
        this.continueDown = false;
        this.isTarget = false;
    }
}
