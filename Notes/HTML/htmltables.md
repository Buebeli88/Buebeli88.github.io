<table> Table Element
In HTML, the <table> element has content that is used to represent a two-dimensional table made of rows and columns.

Beispiel:

<table>
  <!-- rows and columns will go here -->
</table>


<thead> Table Head Element
The table head element, <thead>, defines the headings of table columns encapsulated in table rows.


Beispiel:

<table>
  <thead>
    <tr>
      <th>heading 1</th>
      <th>heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1</td>
      <td>col 2</td>
    </tr>
  </tbody>
</table>


<tbody> Table Body Element
The table body element, <tbody>, is a semantic element that will contain all table data other than table heading and table footer content. If used, <tbody> will contain all table row <tr> elements, and indicates that <tr> elements make up the body of the table. <table> cannot have both <tbody> and <tr> as direct children.

Beispiel:

<table>
  <tbody>
    <tr>
      <td>row 1</td>
    </tr>
    <tr>
      <td>row 2</td>
    </tr>
    <tr>
      <td>row 3</td>
    </tr>
  </tbody>
</table>


<tfoot> Table Footer Element
The table footer element, <tfoot>, uses table rows to give footer content or to summarize content at the end of a table.

Beispiel:

<table>
  <thead>
    <tr>
      <th>heading 1</th>
      <th>heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>col 1</td>
      <td>col 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>summary of col 1</td>
      <td>summary of col 2</td>
    </tr>
  </tfoot>
</table>


<tr> Table Row Element
The table row element, <tr>, is used to add rows to a table before adding table data and table headings.


Beispiel:

<table>
  <tr>
    ….
  </tr>
</table>


<th> Table Heading Element
The table heading element, <th>, is used to add titles to rows and columns of a table and must be enclosed in a table row element, <tr>.

Beispiel:

<table>
  <tr>
    <th>column one</th>
    <th>column two</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
</table>


<td> Table Data Element
The table data element, <td>, can be nested inside a table row element, <tr>, to add a cell of data to a table.

Beispiel:

<table>
  <tr>
    <td>cell one data</td>
    <td>cell two data</td>
  </tr>
</table>


rowspan Attribute
Similar to colspan, the rowspan attribute on a table header or table data element indicates how many rows that particular cell should span within the table. The rowspan value is set to 1 by default and will take any positive integer up to 65534.

Beispiel:

<table>
  <tr>
    <th>row 1:</th>
    <td>col 1</td>
    <td>col 2</td>
  </tr>
  <tr>
    <th rowspan="2">row 2 (this row will span 2 rows):</th>
    <td>col 1</td>
    <td>col 1</td>
  </tr>
  <tr>
    <td>col 1</td>
    <td>col 2</td>
  </tr>
  <tr>
    <th>row 3:</th>
    <td>col 1</th>
    <td>col 2</th>
  </tr>
</table>


colspan Attribute
The colspan attribute on a table header <th> or table data <td> element indicates how many columns that particular cell should span within the table. The colspan value is set to 1 by default and will take any positive integer between 1 and 1000.

Beispiel:

<table>
  <tr>
    <th>row 1:</th>
    <td>col 1</td>
    <td>col 2</td>
    <td>col 3</td>
  </tr>
  <tr>
    <th>row 2:</th>
    <td colspan="2">col 1 (will span 2 columns)</td>
    <td>col 2</td>
    <td>col 3</td>
  </tr>
</table>
