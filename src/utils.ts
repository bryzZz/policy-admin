export function printImage(source: string) {
  const pwa = window.open(source, "_new");
  pwa?.document.open();
  pwa?.document.write(
    "<html><head><scri" +
      "pt>function step1(){\n" +
      "setTimeout('step2()', 10);}\n" +
      "function step2(){window.print();window.close()}\n" +
      "</scri" +
      "pt></head><body onload='step1()'>\n" +
      "<img src='" +
      source +
      "' /></body></html>"
  );
  pwa?.document.close();
}
