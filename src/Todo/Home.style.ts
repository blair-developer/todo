import { IProcessedStyleSet, IStyle} from "@fluentui/react/lib/Styling";
import { mergeStyleSets } from "@fluentui/react";

interface iHomeStyle{
    todoContainer : IStyle;
    headerStyle: IStyle;
    pivotRoot: IStyle;
    pivotContainer: IStyle;
}

const HomeStyle: IProcessedStyleSet<iHomeStyle> = mergeStyleSets({
    todoContainer : {
       width: "50%",
       height: "60%",
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)", 
       boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",    
    },
    headerStyle: {
        height: 50,
        backgroundColor: "beige",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "maroon",
    },
    pivotRoot: {
        display: "inline-block",
        justifyContent:"center"
    },
    pivotContainer: {
        margin: 20,
        
    }

});

export default HomeStyle;