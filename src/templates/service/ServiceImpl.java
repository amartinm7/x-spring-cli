package {{packageName}};

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class {{className}}ServiceImpl<T> implements {{className}}Service<T>{

    private {{className}}CommandPort {{attributeName}}CommandPort;

    public {{className}}ServiceImpl(@Autowired {{className}}CommandPort {{attributeName}}CommandPort){
        this.{{attributeName}}CommandPort = {{attributeName}}CommandPort;
    }

    @Override
    public Optional<T> find(T t) {
        return {{attributeName}}CommandPort.find(t);
    }

    @Override
    public Optional<T> save(T t) {
        return {{attributeName}}CommandPort.save(t);
    }
}
