package rs.ac.singidunum.teretana.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.teretana.entity.Membership;
import rs.ac.singidunum.teretana.repository.MembershipRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MembershipService {

    private final MembershipRepository repository;

    public List<Membership> getAllMemberships() {
        return repository.findAllByDeletedAtIsNull();
    }
    public Optional<Membership> getMembershipById(int id){
        return repository.findByIdAndDeletedAtIsNull(id);
    }
    public Membership createMembership(Membership membership){
        membership.setId(null);
        membership.setCreatedAt(LocalDateTime.now());
        return repository.save(membership);
    }

    public Membership editMembership(Integer id, Membership membership) {
        membership.setId(id);
        return repository.save(membership);
    }

    public void deleteMembership(Integer id) {
        Membership membership = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        membership.setDeletedAt(LocalDateTime.now());
        repository.save(membership);
    }
}
