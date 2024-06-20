package rs.ac.singidunum.teretana.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.teretana.entity.Member;
import rs.ac.singidunum.teretana.repository.MemberRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository repository;

    public List<Member> getAllMembers(){
    return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Member> getMemberById(int id){
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Member createMember(Member member){
        member.setId(null);
        member.setCreatedAt(LocalDateTime.now());
        return repository.save(member);
    }

    public Member editMember(Integer id, Member member) {
        member.setId(id);
        return repository.save(member);
    }

    public void deleteMember(Integer id) {
        Member member = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        member.setDeletedAt(LocalDateTime.now());
        repository.save(member);
    }
}
