package rs.ac.singidunum.teretana.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.teretana.entity.Member;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

        List<Member> findAllByDeletedAtIsNull();

        Optional<Member> findByIdAndDeletedAtIsNull(Integer id);


}
