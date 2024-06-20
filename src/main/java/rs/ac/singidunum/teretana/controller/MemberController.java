package rs.ac.singidunum.teretana.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.teretana.entity.Member;
import rs.ac.singidunum.teretana.service.MemberService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/member")
@RequiredArgsConstructor
@CrossOrigin
public class MemberController {

    private final MemberService service;

    @GetMapping
    public List<Member> getALlMembers() {
        return service.getAllMembers();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Integer id) {

        return ResponseEntity.of(service.getMemberById(id));
    }

    @PostMapping
    public Member createMember(@RequestBody Member member) {
        return service.createMember(member);
    }

    @PutMapping(path = "/{id}")
    public Member updateMember(@PathVariable Integer id, @RequestBody Member member) {
        return service.editMember(id, member);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteMember(@PathVariable Integer id) {
        service.deleteMember(id);
    }

}
