package {{packageName}};

import {{packageName}}.application.{{className}}Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class {{className}}Controller {

private static final Logger logger = LoggerFactory.getLogger({{className}}Controller.class);

    private {{className}}Service {{className}}Service;

    public {{className}}Controller (@Autowired {{className}}Service {{attributeName}}Service){
        this.{{attributeName}}Service = {{attributeName}}Service;
    }

    @GetMapping("/_healthCheck")
    public ResponseEntity<HttpStatus> index() {
        logger.info(">>> {} ", {{className}}Service.toString());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
