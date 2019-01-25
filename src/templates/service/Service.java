package {{packageName}};

import java.util.Optional;

public interface {{className}}Service<T> {

    Optional<T> find (T t);
    Optional<T> save (T t);

}
