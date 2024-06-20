package rs.ac.singidunum.teretana.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.teretana.entity.Membership;
import rs.ac.singidunum.teretana.service.MembershipService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/membership")
@RequiredArgsConstructor
@CrossOrigin
public class MembershipController {

    private final MembershipService service;

    @GetMapping
    public List<Membership> getALlMemberships() {
        return service.getAllMemberships();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Membership> getMembershipById(@PathVariable Integer id) {

        return ResponseEntity.of(service.getMembershipById(id));
    }

    @PostMapping
    public Membership createMembership(@RequestBody Membership membership) {
        return service.createMembership(membership);
    }

    @PutMapping(path = "/{id}")
    public Membership updateMembership(@PathVariable Integer id, @RequestBody Membership membership) {
        return service.editMembership(id, membership);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteMembership(@PathVariable Integer id) {
        service.deleteMembership(id);
    }
}
