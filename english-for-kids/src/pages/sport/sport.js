import "../../styles/style.css";
import paintHeader, { sideMenu } from "../../components/header";
import { paintField } from "../../components/field";
import paintPages from "../../components/paintPages";
import paintTextLinkMenu from "../../components/paintTextLinkMenu";
import play from "../../components/play";

paintHeader();
paintField();
paintPages("Sport");
sideMenu();
paintTextLinkMenu("Sport");
play("Sport");
