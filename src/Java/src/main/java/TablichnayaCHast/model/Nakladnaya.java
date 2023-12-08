package TablichnayaCHast.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import TablichnayaCHast.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Накладная
 */
@Entity(name = "IISTablichnayaCHastНакладная")
@Table(schema = "public", name = "Накладная")
public class Nakladnaya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипНакл")
    private String типнакл;

    @OneToMany(mappedBy = "nakladnaya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Otvetstvennyj> otvetstvennyjs;


    public Nakladnaya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипНакл() {
      return типнакл;
    }

    public void setТипНакл(String типнакл) {
      this.типнакл = типнакл;
    }


}