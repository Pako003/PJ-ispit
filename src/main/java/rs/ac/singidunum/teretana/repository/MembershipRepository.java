package rs.ac.singidunum.teretana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.teretana.entity.Membership;

import java.util.List;
import java.util.Optional;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, Integer> {

    List<Membership> findAllByDeletedAtIsNull();

    Optional<Membership> findByIdAndDeletedAtIsNull(int memberId);

}
