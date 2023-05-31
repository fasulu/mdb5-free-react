import { saveAs } from "file-saver";

function ExportErrDetail(props) {
    let lyrics =
        "But still I'm having memories of high speeds when the cops crashed\n" +
        "As I laugh, pushin the gas while my Glocks blast\n" +
        "We was young and we was dumb but we had heart";

    var blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "testfile1.txt");
}
export {
    ExportErrDetail
}
