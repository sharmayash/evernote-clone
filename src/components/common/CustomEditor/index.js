import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const CustomEditor = ({ value, handleEditorChange }) => {
  return (
    <Editor
      value={value}
      onEditorChange={handleEditorChange}
      apiKey="bztg7tgsaoue6ywmb6ftbap5izwuqmzkicybtrrmj2vpx4s8"
      init={{
        width: "100%",
        height: "80%",
        menubar: false,
        toolbar_mode: "sliding",
        toolbar_sticky: true,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        plugins:
          "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists imagetools textpattern noneditable help charmap quickbars emoticons",
        toolbar: `undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl`,

        templates: [
          {
            title: "Get Started",
            description: "A starting template",
            content: `<h2 style="text-align: center;"><span style="font-family: terminal, monaco, monospace;">Welcome to the Evernote Clone!</span></h2>
            <h2><span style="font-family: terminal, monaco, monospace;">Create your notes here</span></h2>
            <p><span style="font-family: terminal, monaco, monospace;">Customize notes with the rich text editor</span></p>
            <h2><span style="font-family: terminal, monaco, monospace;">A simple table to play with</span></h2>
            <table style="border-collapse: collapse; width: 100%;" border="1">
            <thead>
            <tr>
            <th><span style="font-family: terminal, monaco, monospace;">Product</span></th>
            <th><span style="font-family: terminal, monaco, monospace;">Cost</span></th>
            <th><span style="font-family: terminal, monaco, monospace;">Really?</span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td><span style="font-family: terminal, monaco, monospace;">evernote free</span></td>
            <td><span style="font-family: terminal, monaco, monospace;">Free</span></td>
            <td><span style="font-family: terminal, monaco, monospace;">YES!</span></td>
            </tr>
            <tr>
            <td><span style="font-family: terminal, monaco, monospace;">evernote premium</span></td>
            <td><span style="font-family: terminal, monaco, monospace;">$20/month</span></td>
            <td><span style="font-family: terminal, monaco, monospace;">YES!</span></td>
            </tr>
            </tbody>
            </table>
            <h2><span style="font-family: terminal, monaco, monospace;">Found a bug?</span></h2>
            <p><span style="font-family: terminal, monaco, monospace;">If you think you have found a bug please create an issue on the <a href="https://github.com/sharmayash/evernote-clone/issues" target="_blank" rel="noopener">GitHub repo</a> to report it to the developers.</span></p>`,
          },
          {
            title: "To-do Planner",
            description: "A template for Adding todos ",
            content: `<div data-pm-slice="1 1 []" data-en-clipboard="true"><strong>Today</strong></div>
          <ul data-todo="true">
          <li data-checked="true">
          <div>Start a to-do list</div>
          </li>
          <li data-checked="false">
          <div>&nbsp;</div>
          </li>
          </ul>
          <div><strong>Tomorrow</strong></div>
          <ul data-todo="true">
          <li data-checked="false">
          <div>&nbsp;</div>
          </li>
          </ul>
          <div><strong>This Week</strong></div>
          <ul data-todo="true">
          <li data-checked="false">
          <div>&nbsp;</div>
          </li>
          </ul>
          <div><strong>Someday</strong></div>
          <ul data-todo="true">
          <li data-checked="false">
          <div>&nbsp;</div>
          </li>
          </ul>`,
          },
          {
            title: "Project Planner",
            description: "A Template for planning your projects.",
            content: `<div data-pm-slice="1 0 []" data-en-clipboard="true"><strong>Summary</strong></div>
            <ul>
            <li>
            <div>&nbsp;</div>
            </li>
            </ul>
            <div>&nbsp;</div>
            <div><strong>Major Milestones</strong></div>
            <ul>
            <li>
            <div>&nbsp;</div>
            </li>
            </ul>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <table width="780px"><colgroup><col /><col /><col /><col /><col /><col /></colgroup>
            <tbody>
            <tr>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div><strong>Week 1</strong></div>
            <div>MM/DD/YY</div>
            </td>
            <td data-colwidth="130">
            <div><strong>Week 2</strong></div>
            <div>MM/DD/YY</div>
            </td>
            <td data-colwidth="130">
            <div><strong>Week 3 </strong></div>
            <div>MM/DD/YY</div>
            </td>
            <td data-colwidth="130">
            <div><strong>Week 4</strong></div>
            <div>MM/DD/YY</div>
            </td>
            <td data-colwidth="130">
            <div><strong>Week 5</strong></div>
            <div>MM/DD/YY</div>
            </td>
            </tr>
            <tr>
            <td data-colwidth="130">
            <div><strong>Task 1</strong></div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            </tr>
            <tr>
            <td data-colwidth="130">
            <div><strong>Task 2</strong></div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            </tr>
            <tr>
            <td data-colwidth="130">
            <div><strong>Task 3</strong></div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            </tr>
            <tr>
            <td data-colwidth="130">
            <div><strong>Task 4</strong></div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            <td data-colwidth="130">
            <div>&nbsp;</div>
            </td>
            </tr>
            </tbody>
            </table>
            <div>&nbsp;</div>
            <div><strong>Legend</strong></div>
            <table width="688px"><colgroup><col /><col /><col /><col /><col /></colgroup>
            <tbody>
            <tr>
            <td data-colwidth="130">
            <div>NOT STARTED</div>
            </td>
            <td data-colwidth="130">
            <div>ON TRACK</div>
            </td>
            <td data-colwidth="130">
            <div>AT RISK</div>
            </td>
            <td data-colwidth="180">
            <div>BLOCKED OR DELAYED</div>
            </td>
            <td data-colwidth="118">
            <div>COMPLETE</div>
            </td>
            </tr>
            </tbody>
            </table>`,
          },
        ],
      }}
    />
  );
};

export default CustomEditor;
