package TablichnayaCHast.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import TablichnayaCHast.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Ответственный
 */
@Entity(name = "IISTablichnayaCHastОтветственный")
@Table(schema = "public", name = "Ответственный")
public class Otvetstvennyj {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nakladnaya")
    @Convert("Nakladnaya")
    @Column(name = "Накладная", length = 16, unique = true, nullable = false)
    private UUID _nakladnayaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nakladnaya", insertable = false, updatable = false)
    private Nakladnaya nakladnaya;


    public Otvetstvennyj() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }


}