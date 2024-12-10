function getTable(month)
{
    const tables = {
        Octombrie:`<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1">8h</td>
                    <td class="row-0-col-2">8h</td>
                    <td class="row-0-col-3">8h</td>
                    <td class="row-0-col-4">8h</td>
                    <td class="row-0-col-5 freeDay"></td>
                    <td class="row-0-col-6 freeDay"></td>
                    <td class="row-0-col-7">8h</td>
                    <td class="row-0-col-8">8h</td>
                    <td class="row-0-col-9">8h</td>
                    <td class="row-0-col-10">8h</td>
                    <td class="row-0-col-11">8h</td>
                    <td class="row-0-col-12 freeDay"></td>
                    <td class="row-0-col-13 freeDay"></td>
                    <td class="row-0-col-14">8h</td>
                    <td class="row-0-col-15">8h</td>
                    <td class="row-0-col-16">8h</td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1"><input type="number" class="row-1-col-1-input"></td>
                    <td class="row-1-col-2"><input type="number" class="row-1-col-2-input"></td>
                    <td class="row-1-col-3"><input type="number" class="row-1-col-3-input"></td>
                    <td class="row-1-col-4"><input type="number" class="row-1-col-4-input"></td>
                    <td class="row-1-col-5 freeDay"></td>
                    <td class="row-1-col-6 freeDay"></td>
                    <td class="row-1-col-7"><input type="number" class="row-1-col-7-input"></td>
                    <td class="row-1-col-8"><input type="number" class="row-1-col-8-input"></td>
                    <td class="row-1-col-9"><input type="number" class="row-1-col-9-input"></td>
                    <td class="row-1-col-10"><input type="number" class="row-1-col-10-input"></td>
                    <td class="row-1-col-11"><input type="number" class="row-1-col-11-input"></td>
                    <td class="row-1-col-12 freeDay"></td>
                    <td class="row-1-col-13 freeDay"></td>
                    <td class="row-1-col-14"><input type="number" class="row-1-col-14-input"></td>
                    <td class="row-1-col-15"><input type="number" class="row-1-col-15-input"></td>
                    <td class="row-1-col-16"><input type="number" class="row-1-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1"><input type="number" class="row-2-col-1-input"></td>
                    <td class="row-2-col-2"><input type="number" class="row-2-col-2-input"></td>
                    <td class="row-2-col-3"><input type="number" class="row-2-col-3-input"></td>
                    <td class="row-2-col-4"><input type="number" class="row-2-col-4-input"></td>
                    <td class="row-2-col-5 freeDay"></td>
                    <td class="row-2-col-6 freeDay"></td>
                    <td class="row-2-col-7"><input type="number" class="row-2-col-7-input"></td>
                    <td class="row-2-col-8"><input type="number" class="row-2-col-8-input"></td>
                    <td class="row-2-col-9"><input type="number" class="row-2-col-9-input"></td>
                    <td class="row-2-col-10"><input type="number" class="row-2-col-10-input"></td>
                    <td class="row-2-col-11"><input type="number" class="row-2-col-11-input"></td>
                    <td class="row-2-col-12 freeDay"></td>
                    <td class="row-2-col-13 freeDay"></td>
                    <td class="row-2-col-14"><input type="number" class="row-2-col-14-input"></td>
                    <td class="row-2-col-15"><input type="number" class="row-2-col-15-input"></td>
                    <td class="row-2-col-16"><input type="number" class="row-2-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1"></td>
                    <td class="row-3-col-2"></td>
                    <td class="row-3-col-3"></td>
                    <td class="row-3-col-4"></td>
                    <td class="row-3-col-5 freeDay"></td>
                    <td class="row-3-col-6 freeDay"></td>
                    <td class="row-3-col-7"></td>
                    <td class="row-3-col-8"></td>
                    <td class="row-3-col-9"></td>
                    <td class="row-3-col-10"></td>
                    <td class="row-3-col-11"></td>
                    <td class="row-3-col-12 freeDay"></td>
                    <td class="row-3-col-13 freeDay"></td>
                    <td class="row-3-col-14"></td>
                    <td class="row-3-col-15"></td>
                    <td class="row-3-col-16"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1"></td>
                    <td class="row-4-col-2"></td>
                    <td class="row-4-col-3"></td>
                    <td class="row-4-col-4"></td>
                    <td class="row-4-col-5 freeDay"></td>
                    <td class="row-4-col-6 freeDay"></td>
                    <td class="row-4-col-7"></td>
                    <td class="row-4-col-8"></td>
                    <td class="row-4-col-9"></td>
                    <td class="row-4-col-10"></td>
                    <td class="row-4-col-11"></td>
                    <td class="row-4-col-12 freeDay"></td>
                    <td class="row-4-col-13 freeDay"></td>
                    <td class="row-4-col-14"></td>
                    <td class="row-4-col-15"></td>
                    <td class="row-4-col-16"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17">8h</td>
                    <td class="row-0-col-18">8h</td>
                    <td class="row-0-col-19 freeDay"></td>
                    <td class="row-0-col-20 freeDay"></td>
                    <td class="row-0-col-21">8h</td>
                    <td class="row-0-col-22">8h</td>
                    <td class="row-0-col-23">8h</td>
                    <td class="row-0-col-24">8h</td>
                    <td class="row-0-col-25">8h</td>
                    <td class="row-0-col-26 freeDay"></td>
                    <td class="row-0-col-27 freeDay"></td>
                    <td class="row-0-col-28">8h</td>
                    <td class="row-0-col-29">8h</td>
                    <td class="row-0-col-30">8h</td>
                    <td class="row-0-col-31">8h</td><td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17"><input type="number" class="row-1-col-17-input"></td>
                    <td class="row-1-col-18"><input type="number" class="row-1-col-18-input"></td>
                    <td class="row-1-col-19 freeDay"></td>
                    <td class="row-1-col-20 freeDay"></td>
                    <td class="row-1-col-21"><input type="number" class="row-1-col-21-input"></td>
                    <td class="row-1-col-22"><input type="number" class="row-1-col-22-input"></td>
                    <td class="row-1-col-23"><input type="number" class="row-1-col-23-input"></td>
                    <td class="row-1-col-24"><input type="number" class="row-1-col-24-input"></td>
                    <td class="row-1-col-25"><input type="number" class="row-1-col-25-input"></td>
                    <td class="row-1-col-26 freeDay"></td>
                    <td class="row-1-col-27 freeDay"></td>
                    <td class="row-1-col-28"><input type="number" class="row-1-col-28-input"></td>
                    <td class="row-1-col-29"><input type="number" class="row-1-col-29-input"></td>
                    <td class="row-1-col-30"><input type="number" class="row-1-col-30-input"></td>
                    <td class="row-1-col-31"><input type="number" class="row-1-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17"><input type="number" class="row-2-col-17-input"></td>
                    <td class="row-2-col-18"><input type="number" class="row-2-col-18-input"></td>
                    <td class="row-2-col-19 freeDay"></td>
                    <td class="row-2-col-20 freeDay"></td>
                    <td class="row-2-col-21"><input type="number" class="row-2-col-21-input"></td>
                    <td class="row-2-col-22"><input type="number" class="row-2-col-22-input"></td>
                    <td class="row-2-col-23"><input type="number" class="row-2-col-23-input"></td>
                    <td class="row-2-col-24"><input type="number" class="row-2-col-24-input"></td>
                    <td class="row-2-col-25"><input type="number" class="row-2-col-25-input"></td>
                    <td class="row-2-col-26 freeDay"></td>
                    <td class="row-2-col-27 freeDay"></td>
                    <td class="row-2-col-28"><input type="number" class="row-2-col-28-input"></td>
                    <td class="row-2-col-29"><input type="number" class="row-2-col-29-input"></td>
                    <td class="row-2-col-30"><input type="number" class="row-2-col-30-input"></td>
                    <td class="row-2-col-31"><input type="number" class="row-2-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17"></td>
                    <td class="row-3-col-18"></td>
                    <td class="row-3-col-19 freeDay"></td>
                    <td class="row-3-col-20 freeDay"></td>
                    <td class="row-3-col-21"></td>
                    <td class="row-3-col-22"></td>
                    <td class="row-3-col-23"></td>
                    <td class="row-3-col-24"></td>
                    <td class="row-3-col-25"></td>
                    <td class="row-3-col-26 freeDay"></td>
                    <td class="row-3-col-27 freeDay"></td>
                    <td class="row-3-col-28"></td>
                    <td class="row-3-col-29"></td>
                    <td class="row-3-col-30"></td>
                    <td class="row-3-col-31"></td><td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17"></td>
                    <td class="row-4-col-18"></td>
                    <td class="row-4-col-19 freeDay"></td>
                    <td class="row-4-col-20 freeDay"></td>
                    <td class="row-4-col-21"></td>
                    <td class="row-4-col-22"></td>
                    <td class="row-4-col-23"></td>
                    <td class="row-4-col-24"></td>
                    <td class="row-4-col-25"></td>
                    <td class="row-4-col-26 freeDay"></td>
                    <td class="row-4-col-27 freeDay"></td>
                    <td class="row-4-col-28"></td>
                    <td class="row-4-col-29"></td>
                    <td class="row-4-col-30"></td>
                    <td class="row-4-col-31"></td><td></td>
                </tr>
            `,
        Septembrie: `<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1 freeDay"></td>
                    <td class="row-0-col-2">8h</td>
                    <td class="row-0-col-3">8h</td>
                    <td class="row-0-col-4">8h</td>
                    <td class="row-0-col-5">8h</td>
                    <td class="row-0-col-6">8h</td>
                    <td class="row-0-col-7 freeDay"></td>
                    <td class="row-0-col-8 freeDay"></td>
                    <td class="row-0-col-9">8h</td>
                    <td class="row-0-col-10">8h</td>
                    <td class="row-0-col-11">8h</td>
                    <td class="row-0-col-12">8h</td>
                    <td class="row-0-col-13">8h</td>
                    <td class="row-0-col-14 freeDay"></td>
                    <td class="row-0-col-15 freeDay"></td>
                    <td class="row-0-col-16">8h</td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1 freeDay"></td>
                    <td class="row-1-col-2"><input type="number" class="row-1-col-2-input"></td>
                    <td class="row-1-col-3"><input type="number" class="row-1-col-3-input"></td>
                    <td class="row-1-col-4"><input type="number" class="row-1-col-4-input"></td>
                    <td class="row-1-col-5"><input type="number" class="row-1-col-5-input"></td>
                    <td class="row-1-col-6"><input type="number" class="row-1-col-6-input"></td>
                    <td class="row-1-col-7 freeDay"></td>
                    <td class="row-1-col-8 freeDay"></td>
                    <td class="row-1-col-9"><input type="number" class="row-1-col-9-input"></td>
                    <td class="row-1-col-10"><input type="number" class="row-1-col-10-input"></td>
                    <td class="row-1-col-11"><input type="number" class="row-1-col-11-input"></td>
                    <td class="row-1-col-12"><input type="number" class="row-1-col-12-input"></td>
                    <td class="row-1-col-13"><input type="number" class="row-1-col-13-input"></td>
                    <td class="row-1-col-14 freeDay"></td>
                    <td class="row-1-col-15 freeDay"></td>
                    <td class="row-1-col-16"><input type="number" class="row-1-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1 freeDay"></td>
                    <td class="row-2-col-2"><input type="number" class="row-2-col-2-input"></td>
                    <td class="row-2-col-3"><input type="number" class="row-2-col-3-input"></td>
                    <td class="row-2-col-4"><input type="number" class="row-2-col-4-input"></td>
                    <td class="row-2-col-5"><input type="number" class="row-2-col-5-input"></td>
                    <td class="row-2-col-6"><input type="number" class="row-2-col-6-input"></td>
                    <td class="row-2-col-7 freeDay"></td>
                    <td class="row-2-col-8 freeDay"></td>
                    <td class="row-2-col-9"><input type="number" class="row-2-col-9-input"></td>
                    <td class="row-2-col-10"><input type="number" class="row-2-col-10-input"></td>
                    <td class="row-2-col-11"><input type="number" class="row-2-col-11-input"></td>
                    <td class="row-2-col-12"><input type="number" class="row-2-col-12-input"></td>
                    <td class="row-2-col-13"><input type="number" class="row-2-col-13-input"></td>
                    <td class="row-2-col-14 freeDay"></td>
                    <td class="row-2-col-15 freeDay"></td>
                    <td class="row-2-col-16"><input type="number" class="row-2-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1 freeDay"></td>
                    <td class="row-3-col-2"></td>
                    <td class="row-3-col-3"></td>
                    <td class="row-3-col-4"></td>
                    <td class="row-3-col-5"></td>
                    <td class="row-3-col-6"></td>
                    <td class="row-3-col-7 freeDay"></td>
                    <td class="row-3-col-8 freeDay"></td>
                    <td class="row-3-col-9"></td>
                    <td class="row-3-col-10"></td>
                    <td class="row-3-col-11"></td>
                    <td class="row-3-col-12"></td>
                    <td class="row-3-col-13"></td>
                    <td class="row-3-col-14 freeDay"></td>
                    <td class="row-3-col-15 freeDay"></td>
                    <td class="row-3-col-16"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1 freeDay"></td>
                    <td class="row-4-col-2"></td>
                    <td class="row-4-col-3"></td>
                    <td class="row-4-col-4"></td>
                    <td class="row-4-col-5"></td>
                    <td class="row-4-col-6"></td>
                    <td class="row-4-col-7 freeDay"></td>
                    <td class="row-4-col-8 freeDay"></td>
                    <td class="row-4-col-9"></td>
                    <td class="row-4-col-10"></td>
                    <td class="row-4-col-11"></td>
                    <td class="row-4-col-12"></td>
                    <td class="row-4-col-13"></td>
                    <td class="row-4-col-14 freeDay"></td>
                    <td class="row-4-col-15 freeDay"></td>
                    <td class="row-4-col-16"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17">8h</td>
                    <td class="row-0-col-18">8h</td>
                    <td class="row-0-col-19">8h</td>
                    <td class="row-0-col-20">8h</td>
                    <td class="row-0-col-21 freeDay"></td>
                    <td class="row-0-col-22 freeDay"></td>
                    <td class="row-0-col-23">8h</td>
                    <td class="row-0-col-24">8h</td>
                    <td class="row-0-col-25">8h</td>
                    <td class="row-0-col-26">8h</td>
                    <td class="row-0-col-27">8h</td>
                    <td class="row-0-col-28 freeDay"></td>
                    <td class="row-0-col-29 freeDay"></td>
                    <td class="row-0-col-30">8h</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17"><input type="number" class="row-1-col-17-input"></td>
                    <td class="row-1-col-18"><input type="number" class="row-1-col-18-input"></td>
                    <td class="row-1-col-19"><input type="number" class="row-1-col-19-input"></td>
                    <td class="row-1-col-20"><input type="number" class="row-1-col-20-input"></td>
                    <td class="row-1-col-21 freeDay"></td>
                    <td class="row-1-col-22 freeDay"></td>
                    <td class="row-1-col-23"><input type="number" class="row-1-col-23-input"></td>
                    <td class="row-1-col-24"><input type="number" class="row-1-col-24-input"></td>
                    <td class="row-1-col-25"><input type="number" class="row-1-col-25-input"></td>
                    <td class="row-1-col-26"><input type="number" class="row-1-col-26-input"></td>
                    <td class="row-1-col-27"><input type="number" class="row-1-col-27-input"></td>
                    <td class="row-1-col-28 freeDay"></td>
                    <td class="row-1-col-29 freeDay"></td>
                    <td class="row-1-col-30"><input type="number" class="row-1-col-30-input"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17"><input type="number" class="row-2-col-17-input"></td>
                    <td class="row-2-col-18"><input type="number" class="row-2-col-18-input"></td>
                    <td class="row-2-col-19"><input type="number" class="row-2-col-19-input"></td>
                    <td class="row-2-col-20"><input type="number" class="row-2-col-20-input"></td>
                    <td class="row-2-col-21 freeDay"></td>
                    <td class="row-2-col-22 freeDay"></td>
                    <td class="row-2-col-23"><input type="number" class="row-2-col-23-input"></td>
                    <td class="row-2-col-24"><input type="number" class="row-2-col-24-input"></td>
                    <td class="row-2-col-25"><input type="number" class="row-2-col-25-input"></td>
                    <td class="row-2-col-26"><input type="number" class="row-2-col-26-input"></td>
                    <td class="row-2-col-27"><input type="number" class="row-2-col-27-input"></td>
                    <td class="row-2-col-28 freeDay"></td>
                    <td class="row-2-col-29 freeDay"></td>
                    <td class="row-2-col-30"><input type="number" class="row-2-col-30-input"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17"></td>
                    <td class="row-3-col-18"></td>
                    <td class="row-3-col-19"></td>
                    <td class="row-3-col-20"></td>
                    <td class="row-3-col-21 freeDay"></td>
                    <td class="row-3-col-22 freeDay"></td>
                    <td class="row-3-col-23"></td>
                    <td class="row-3-col-24"></td>
                    <td class="row-3-col-25"></td>
                    <td class="row-3-col-26"></td>
                    <td class="row-3-col-27"></td>
                    <td class="row-3-col-28 freeDay"></td>
                    <td class="row-3-col-29 freeDay"></td>
                    <td class="row-3-col-30"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17"></td>
                    <td class="row-4-col-18"></td>
                    <td class="row-4-col-19"></td>
                    <td class="row-4-col-20"></td>
                    <td class="row-4-col-21 freeDay"></td>
                    <td class="row-4-col-22 freeDay"></td>
                    <td class="row-4-col-23"></td>
                    <td class="row-4-col-24"></td>
                    <td class="row-4-col-25"></td>
                    <td class="row-4-col-26"></td>
                    <td class="row-4-col-27"></td>
                    <td class="row-4-col-28 freeDay"></td>
                    <td class="row-4-col-29 freeDay"></td>
                    <td class="row-4-col-30"></td>
                    <td></td>
                    <td></td>
                </tr>
            `,
        Februarie:`<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1 freeDay"></td>
                    <td class="row-0-col-2 freeDay"></td>
                    <td class="row-0-col-3">8h</td>
                    <td class="row-0-col-4">8h</td>
                    <td class="row-0-col-5">8h</td>
                    <td class="row-0-col-6">8h</td>
                    <td class="row-0-col-7">8h</td>
                    <td class="row-0-col-8 freeDay"></td>
                    <td class="row-0-col-9 freeDay"></td>
                    <td class="row-0-col-10">8h</td>
                    <td class="row-0-col-11">8h</td>
                    <td class="row-0-col-12">8h</td>
                    <td class="row-0-col-13">8h</td>
                    <td class="row-0-col-14">8h</td>
                    <td class="row-0-col-15 freeDay"></td>
                    <td class="row-0-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1 freeDay"></td>
                    <td class="row-1-col-2 freeDay"></td>
                    <td class="row-1-col-3"><input type="number" class="row-1-col-3-input"></td>
                    <td class="row-1-col-4"><input type="number" class="row-1-col-4-input"></td>
                    <td class="row-1-col-5"><input type="number" class="row-1-col-5-input"></td>
                    <td class="row-1-col-6"><input type="number" class="row-1-col-6-input"></td>
                    <td class="row-1-col-7"><input type="number" class="row-1-col-7-input"></td>
                    <td class="row-1-col-8 freeDay"></td>
                    <td class="row-1-col-9 freeDay"></td>
                    <td class="row-1-col-10"><input type="number" class="row-1-col-10-input"></td>
                    <td class="row-1-col-11"><input type="number" class="row-1-col-11-input"></td>
                    <td class="row-1-col-12"><input type="number" class="row-1-col-12-input"></td>
                    <td class="row-1-col-13"><input type="number" class="row-1-col-13-input"></td>
                    <td class="row-1-col-14"><input type="number" class="row-1-col-14-input"></td>
                    <td class="row-1-col-15 freeDay"></td>
                    <td class="row-1-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1 freeDay"></td>
                    <td class="row-2-col-2 freeDay"></td>
                    <td class="row-2-col-3"><input type="number" class="row-2-col-3-input"></td>
                    <td class="row-2-col-4"><input type="number" class="row-2-col-4-input"></td>
                    <td class="row-2-col-5"><input type="number" class="row-2-col-5-input"></td>
                    <td class="row-2-col-6"><input type="number" class="row-2-col-6-input"></td>
                    <td class="row-2-col-7"><input type="number" class="row-2-col-7-input"></td>
                    <td class="row-2-col-8 freeDay"></td>
                    <td class="row-2-col-9 freeDay"></td>
                    <td class="row-2-col-10"><input type="number" class="row-2-col-10-input"></td>
                    <td class="row-2-col-11"><input type="number" class="row-2-col-11-input"></td>
                    <td class="row-2-col-12"><input type="number" class="row-2-col-12-input"></td>
                    <td class="row-2-col-13"><input type="number" class="row-2-col-13-input"></td>
                    <td class="row-2-col-14"><input type="number" class="row-2-col-14-input"></td>
                    <td class="row-2-col-15 freeDay"></td>
                    <td class="row-2-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1 freeDay"></td>
                    <td class="row-3-col-2 freeDay"></td>
                    <td class="row-3-col-3"></td>
                    <td class="row-3-col-4"></td>
                    <td class="row-3-col-5"></td>
                    <td class="row-3-col-6"></td>
                    <td class="row-3-col-7"></td>
                    <td class="row-3-col-8 freeDay"></td>
                    <td class="row-3-col-9 freeDay"></td>
                    <td class="row-3-col-10"></td>
                    <td class="row-3-col-11"></td>
                    <td class="row-3-col-12"></td>
                    <td class="row-3-col-13"></td>
                    <td class="row-3-col-14"></td>
                    <td class="row-3-col-15 freeDay"></td>
                    <td class="row-3-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1 freeDay"></td>
                    <td class="row-4-col-2 freeDay"></td>
                    <td class="row-4-col-3"></td>
                    <td class="row-4-col-4"></td>
                    <td class="row-4-col-5"></td>
                    <td class="row-4-col-6"></td>
                    <td class="row-4-col-7"></td>
                    <td class="row-4-col-8 freeDay"></td>
                    <td class="row-4-col-9 freeDay"></td>
                    <td class="row-4-col-10"></td>
                    <td class="row-4-col-11"></td>
                    <td class="row-4-col-12"></td>
                    <td class="row-4-col-13"></td>
                    <td class="row-4-col-14"></td>
                    <td class="row-4-col-15 freeDay"></td>
                    <td class="row-4-col-16 freeDay"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17">8h</td>
                    <td class="row-0-col-18">8h</td>
                    <td class="row-0-col-19">8h</td>
                    <td class="row-0-col-20">8h</td>
                    <td class="row-0-col-21">8h</td>
                    <td class="row-0-col-22">8h</td>
                    <td class="row-0-col-23">8h</td>
                    <td class="row-0-col-24">8h</td>
                    <td class="row-0-col-25 freeDay"></td>
                    <td class="row-0-col-26 freeDay"></td>
                    <td class="row-0-col-27">8h</td>
                    <td class="row-0-col-28">8h</td>
                    <td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17"><input type="number" class="row-1-col-17-input"></td>
                    <td class="row-1-col-18"><input type="number" class="row-1-col-18-input"></td>
                    <td class="row-1-col-19"><input type="number" class="row-1-col-19-input"></td>
                    <td class="row-1-col-20"><input type="number" class="row-1-col-20-input"></td>
                    <td class="row-1-col-21"><input type="number" class="row-1-col-21-input"></td>
                    <td class="row-1-col-22"><input type="number" class="row-1-col-22-input"></td>
                    <td class="row-1-col-23"><input type="number" class="row-1-col-23-input"></td>
                    <td class="row-1-col-24"><input type="number" class="row-1-col-24-input"></td>
                    <td class="row-1-col-25 freeDay"></td>
                    <td class="row-1-col-26 freeDay"></td>
                    <td class="row-1-col-27"><input type="number" class="row-1-col-27-input"></td>
                    <td class="row-1-col-28"><input type="number" class="row-1-col-28-input"></td>
                    <td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17"><input type="number" class="row-2-col-17-input"></td>
                    <td class="row-2-col-18"><input type="number" class="row-2-col-18-input"></td>
                    <td class="row-2-col-19"><input type="number" class="row-2-col-19-input"></td>
                    <td class="row-2-col-20"><input type="number" class="row-2-col-20-input"></td>
                    <td class="row-2-col-21"><input type="number" class="row-2-col-21-input"></td>
                    <td class="row-2-col-22"><input type="number" class="row-2-col-22-input"></td>
                    <td class="row-2-col-23"><input type="number" class="row-2-col-23-input"></td>
                    <td class="row-2-col-24"><input type="number" class="row-2-col-24-input"></td>
                    <td class="row-2-col-25 freeDay"></td>
                    <td class="row-2-col-26 freeDay"></td>
                    <td class="row-2-col-27"><input type="number" class="row-2-col-27-input"></td>
                    <td class="row-2-col-28"><input type="number" class="row-2-col-28-input"></td>
                    <td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17"></td>
                    <td class="row-3-col-18"></td>
                    <td class="row-3-col-19"></td>
                    <td class="row-3-col-20"></td>
                    <td class="row-3-col-21"></td>
                    <td class="row-3-col-22"></td>
                    <td class="row-3-col-23"></td>
                    <td class="row-3-col-24"></td>
                    <td class="row-3-col-25 freeDay"></td>
                    <td class="row-3-col-26 freeDay"></td>
                    <td class="row-3-col-27"></td>
                    <td class="row-3-col-28"></td>
                    <td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17"></td>
                    <td class="row-4-col-18"></td>
                    <td class="row-4-col-19"></td>
                    <td class="row-4-col-20"></td>
                    <td class="row-4-col-21"></td>
                    <td class="row-4-col-22"></td>
                    <td class="row-4-col-23"></td>
                    <td class="row-4-col-24"></td>
                    <td class="row-4-col-25 freeDay"></td>
                    <td class="row-4-col-26 freeDay"></td>
                    <td class="row-4-col-27"></td>
                    <td class="row-4-col-28"></td>
                    <td></td><td></td><td></td><td></td>
                </tr>
            `,
        Noiembrie:`<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1">8h</td>
                    <td class="row-0-col-2 freeDay"></td>
                    <td class="row-0-col-3 freeDay"></td>
                    <td class="row-0-col-4">8h</td>
                    <td class="row-0-col-5">8h</td>
                    <td class="row-0-col-6">8h</td>
                    <td class="row-0-col-7">8h</td>
                    <td class="row-0-col-8">8h</td>
                    <td class="row-0-col-9 freeDay"></td>
                    <td class="row-0-col-10 freeDay"></td>
                    <td class="row-0-col-11">8h</td>
                    <td class="row-0-col-12">8h</td>
                    <td class="row-0-col-13">8h</td>
                    <td class="row-0-col-14">8h</td>
                    <td class="row-0-col-15">8h</td>
                    <td class="row-0-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1"><input type="number" class="row-1-col-1-input"></td>
                    <td class="row-1-col-2 freeDay"></td>
                    <td class="row-1-col-3 freeDay"></td>
                    <td class="row-1-col-4"><input type="number" class="row-1-col-4-input"></td>
                    <td class="row-1-col-5"><input type="number" class="row-1-col-5-input"></td>
                    <td class="row-1-col-6"><input type="number" class="row-1-col-6-input"></td>
                    <td class="row-1-col-7"><input type="number" class="row-1-col-7-input"></td>
                    <td class="row-1-col-8"><input type="number" class="row-1-col-8-input"></td>
                    <td class="row-1-col-9 freeDay"></td>
                    <td class="row-1-col-10 freeDay"></td>
                    <td class="row-1-col-11"><input type="number" class="row-1-col-11-input"></td>
                    <td class="row-1-col-12"><input type="number" class="row-1-col-12-input"></td>
                    <td class="row-1-col-13"><input type="number" class="row-1-col-13-input"></td>
                    <td class="row-1-col-14"><input type="number" class="row-1-col-14-input"></td>
                    <td class="row-1-col-15"><input type="number" class="row-1-col-15-input"></td>
                    <td class="row-1-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1"><input type="number" class="row-2-col-1-input"></td>
                    <td class="row-2-col-2 freeDay"></td>
                    <td class="row-2-col-3 freeDay"</td>
                    <td class="row-2-col-4"><input type="number" class="row-2-col-4-input"></td>
                    <td class="row-2-col-5"><input type="number" class="row-2-col-5-input"></td>
                    <td class="row-2-col-6"><input type="number" class="row-2-col-6-input"></td>
                    <td class="row-2-col-7"><input type="number" class="row-2-col-7-input"></td>
                    <td class="row-2-col-8"><input type="number" class="row-2-col-8-input"></td>
                    <td class="row-2-col-9 freeDay"></td>
                    <td class="row-2-col-10 freeDay"></td>
                    <td class="row-2-col-11"><input type="number" class="row-2-col-11-input"></td>
                    <td class="row-2-col-12"><input type="number" class="row-2-col-12-input"></td>
                    <td class="row-2-col-13"><input type="number" class="row-2-col-13-input"></td>
                    <td class="row-2-col-14"><input type="number" class="row-2-col-14-input"></td>
                    <td class="row-2-col-15"><input type="number" class="row-2-col-15-input"></td>
                    <td class="row-2-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1"></td>
                    <td class="row-3-col-2 freeDay"></td>
                    <td class="row-3-col-3 freeDay"></td>
                    <td class="row-3-col-4"></td>
                    <td class="row-3-col-5"></td>
                    <td class="row-3-col-6"></td>
                    <td class="row-3-col-7"></td>
                    <td class="row-3-col-8"></td>
                    <td class="row-3-col-9 freeDay"></td>
                    <td class="row-3-col-10 freeDay"></td>
                    <td class="row-3-col-11"></td>
                    <td class="row-3-col-12"></td>
                    <td class="row-3-col-13"></td>
                    <td class="row-3-col-14"></td>
                    <td class="row-3-col-15"></td>
                    <td class="row-3-col-16 freeDay"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1"></td>
                    <td class="row-4-col-2 freeDay"></td>
                    <td class="row-4-col-3 freeDay"></td>
                    <td class="row-4-col-4"></td>
                    <td class="row-4-col-5"></td>
                    <td class="row-4-col-6"></td>
                    <td class="row-4-col-7"></td>
                    <td class="row-4-col-8"></td>
                    <td class="row-4-col-9 freeDay"></td>
                    <td class="row-4-col-10 freeDay"></td>
                    <td class="row-4-col-11"></td>
                    <td class="row-4-col-12"></td>
                    <td class="row-4-col-13"></td>
                    <td class="row-4-col-14"></td>
                    <td class="row-4-col-15"></td>
                    <td class="row-4-col-16 freeDay"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17 freeDay"></td>
                    <td class="row-0-col-18">8h</td>
                    <td class="row-0-col-19">8h</td>
                    <td class="row-0-col-20">8h</td>
                    <td class="row-0-col-21">8h</td>
                    <td class="row-0-col-22">8h</td>
                    <td class="row-0-col-23 freeDay"></td>
                    <td class="row-0-col-24 freeDay"></td>
                    <td class="row-0-col-25">8h</td>
                    <td class="row-0-col-26">8h</td>
                    <td class="row-0-col-27">8h</td>
                    <td class="row-0-col-28">8h</td>
                    <td class="row-0-col-29">8h</td>
                    <td class="row-0-col-30 freeDay"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17 freeDay"></td>
                    <td class="row-1-col-18"><input type="number" class="row-1-col-18-input"></td>
                    <td class="row-1-col-19"><input type="number" class="row-1-col-19-input"></td>
                    <td class="row-1-col-20"><input type="number" class="row-1-col-20-input"></td>
                    <td class="row-1-col-21"><input type="number" class="row-1-col-21-input"></td>
                    <td class="row-1-col-22"><input type="number" class="row-1-col-22-input"></td>
                    <td class="row-1-col-23 freeDay"></td>
                    <td class="row-1-col-24 freeDay"></td>
                    <td class="row-1-col-25"><input type="number" class="row-1-col-25-input"></td>
                    <td class="row-1-col-26"><input type="number" class="row-1-col-26-input"></td>
                    <td class="row-1-col-27"><input type="number" class="row-1-col-27-input"></td>
                    <td class="row-1-col-28"><input type="number" class="row-1-col-28-input"></td>
                    <td class="row-1-col-29"><input type="number" class="row-1-col-29-input"></td>
                    <td class="row-1-col-30 freeDay"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17 freeDay"></td>
                    <td class="row-2-col-18"><input type="number" class="row-2-col-18-input"></td>
                    <td class="row-2-col-19"><input type="number" class="row-2-col-19-input"></td>
                    <td class="row-2-col-20"><input type="number" class="row-2-col-20-input"></td>
                    <td class="row-2-col-21"><input type="number" class="row-2-col-21-input"></td>
                    <td class="row-2-col-22"><input type="number" class="row-2-col-22-input"></td>
                    <td class="row-2-col-23 freeDay"></td>
                    <td class="row-2-col-24 freeDay"></td>
                    <td class="row-2-col-25"><input type="number" class="row-2-col-25-input"></td>
                    <td class="row-2-col-26"><input type="number" class="row-2-col-26-input"></td>
                    <td class="row-2-col-27"><input type="number" class="row-2-col-27-input"></td>
                    <td class="row-2-col-28"><input type="number" class="row-2-col-28-input"></td>
                    <td class="row-2-col-29"><input type="number" class="row-2-col-29-input"></td>
                    <td class="row-2-col-30 freeDay"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17 freeDay"></td>
                    <td class="row-3-col-18"></td>
                    <td class="row-3-col-19"></td>
                    <td class="row-3-col-20"></td>
                    <td class="row-3-col-21"></td>
                    <td class="row-3-col-22"></td>
                    <td class="row-3-col-23 freeDay"></td>
                    <td class="row-3-col-24 freeDay"></td>
                    <td class="row-3-col-25"></td>
                    <td class="row-3-col-26"></td>
                    <td class="row-3-col-27"></td>
                    <td class="row-3-col-28"></td>
                    <td class="row-3-col-29"></td>
                    <td class="row-3-col-30 freeDay"></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17 freeDay"></td>
                    <td class="row-4-col-18"></td>
                    <td class="row-4-col-19"></td>
                    <td class="row-4-col-20"></td>
                    <td class="row-4-col-21"></td>
                    <td class="row-4-col-22"></td>
                    <td class="row-4-col-23 freeDay"></td>
                    <td class="row-4-col-24 freeDay"></td>
                    <td class="row-4-col-25"></td>
                    <td class="row-4-col-26"></td>
                    <td class="row-4-col-27"></td>
                    <td class="row-4-col-28"></td>
                    <td class="row-4-col-29"></td>
                    <td class="row-4-col-30 freeDay"></td>
                    <td></td>
                    <td></td>
                </tr>
            `,
        Ianuarie:`<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1 freeDay"></td>
                    <td class="row-0-col-2 freeDay"></td>
                    <td class="row-0-col-3">8h</td>
                    <td class="row-0-col-4 freeDay"></td>
                    <td class="row-0-col-5 freeDay"></td>
                    <td class="row-0-col-6 freeDay"</td>
                    <td class="row-0-col-7 freeDay"</td>
                    <td class="row-0-col-8">8h</td>
                    <td class="row-0-col-9">8h</td>
                    <td class="row-0-col-10">8h</td>
                    <td class="row-0-col-11 freeDay"></td>
                    <td class="row-0-col-12 freeDay"></td>
                    <td class="row-0-col-13">8h</td>
                    <td class="row-0-col-14">8h</td>
                    <td class="row-0-col-15">8h</td>
                    <td class="row-0-col-16">8h</td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1 freeDay"></td>
                    <td class="row-1-col-2 freeDay"></td>
                    <td class="row-1-col-3"><input type="number" class="row-1-col-3-input"></td>
                    <td class="row-1-col-4 freeDay"></td>
                    <td class="row-1-col-5 freeDay"></td>
                    <td class="row-1-col-6 freeDay"></td>
                    <td class="row-1-col-7 freeDay"></td>
                    <td class="row-1-col-8"><input type="number" class="row-1-col-8-input"></td>
                    <td class="row-1-col-9"><input type="number" class="row-1-col-9-input"></td>
                    <td class="row-1-col-10"><input type="number" class="row-1-col-10-input"></td>
                    <td class="row-1-col-11 freeDay"></td>
                    <td class="row-1-col-12 freeDay"></td>
                    <td class="row-1-col-13"><input type="number" class="row-1-col-13-input"></td>
                    <td class="row-1-col-14"><input type="number" class="row-1-col-14-input"></td>
                    <td class="row-1-col-15"><input type="number" class="row-1-col-15-input"></td>
                    <td class="row-1-col-16"><input type="number" class="row-1-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1 freeDay"></td>
                    <td class="row-2-col-2 freeDay"></td>
                    <td class="row-2-col-3"><input type="number" class="row-2-col-3-input"></td>
                    <td class="row-2-col-4 freeDay"></td>
                    <td class="row-2-col-5 freeDay"></td>
                    <td class="row-2-col-6 freeDay"></td>
                    <td class="row-2-col-7 freeDay"></td>
                    <td class="row-2-col-8"><input type="number" class="row-2-col-8-input"></td>
                    <td class="row-2-col-9"><input type="number" class="row-2-col-9-input"></td>
                    <td class="row-2-col-10"><input type="number" class="row-2-col-10-input"></td>
                    <td class="row-2-col-11 freeDay"></td>
                    <td class="row-2-col-12 freeDay"></td>
                    <td class="row-2-col-13"><input type="number" class="row-2-col-13-input"></td>
                    <td class="row-2-col-14"><input type="number" class="row-2-col-14-input"></td>
                    <td class="row-2-col-15"><input type="number" class="row-2-col-15-input"></td>
                    <td class="row-2-col-16"><input type="number" class="row-2-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1 freeDay"></td>
                    <td class="row-3-col-2 freeDay"></td>
                    <td class="row-3-col-3"></td>
                    <td class="row-3-col-4 freeDay"></td>
                    <td class="row-3-col-5 freeDay"></td>
                    <td class="row-3-col-6 freeDay"></td>
                    <td class="row-3-col-7 freeDay"></td>
                    <td class="row-3-col-8"></td>
                    <td class="row-3-col-9"></td>
                    <td class="row-3-col-10"></td>
                    <td class="row-3-col-11 freeDay"></td>
                    <td class="row-3-col-12 freeDay"></td>
                    <td class="row-3-col-13"></td>
                    <td class="row-3-col-14"></td>
                    <td class="row-3-col-15"></td>
                    <td class="row-3-col-16"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1 freeDay"></td>
                    <td class="row-4-col-2 freeDay"></td>
                    <td class="row-4-col-3"></td>
                    <td class="row-4-col-4 freeDay"></td>
                    <td class="row-4-col-5 freeDay"></td>
                    <td class="row-4-col-6 freeDay"></td>
                    <td class="row-4-col-7 freeDay"></td>
                    <td class="row-4-col-8"></td>
                    <td class="row-4-col-9"></td>
                    <td class="row-4-col-10"></td>
                    <td class="row-4-col-11 freeDay"></td>
                    <td class="row-4-col-12 freeDay"></td>
                    <td class="row-4-col-13"></td>
                    <td class="row-4-col-14"></td>
                    <td class="row-4-col-15"></td>
                    <td class="row-4-col-16"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17">8h</td>
                    <td class="row-0-col-18 freeDay"></td>
                    <td class="row-0-col-19 freeDay"></td>
                    <td class="row-0-col-20">8h</td>
                    <td class="row-0-col-21">8h</td>
                    <td class="row-0-col-22">8h</td>
                    <td class="row-0-col-23">8h</td>
                    <td class="row-0-col-24 freeDay"></td>
                    <td class="row-0-col-25 freeDay"></td>
                    <td class="row-0-col-26 freeDay"></td>
                    <td class="row-0-col-27">8h</td>
                    <td class="row-0-col-28">8h</td>
                    <td class="row-0-col-29">8h</td>
                    <td class="row-0-col-30">8h</td>
                    <td class="row-0-col-31">8h</td><td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17"><input type="number" class="row-1-col-17-input"></td>
                    <td class="row-1-col-18 freeDay"></td>
                    <td class="row-1-col-19 freeDay"></td>
                    <td class="row-1-col-20"><input type="number" class="row-1-col-20-input"></td>
                    <td class="row-1-col-21"><input type="number" class="row-1-col-21-input"></td>
                    <td class="row-1-col-22"><input type="number" class="row-1-col-22-input"></td>
                    <td class="row-1-col-23"><input type="number" class="row-1-col-23-input"></td>
                    <td class="row-1-col-24 freeDay"></td>
                    <td class="row-1-col-25 freeDay"></td>
                    <td class="row-1-col-26 freeDay"></td>
                    <td class="row-1-col-27"><input type="number" class="row-1-col-27-input"></td>
                    <td class="row-1-col-28"><input type="number" class="row-1-col-28-input"></td>
                    <td class="row-1-col-29"><input type="number" class="row-1-col-29-input"></td>
                    <td class="row-1-col-30"><input type="number" class="row-1-col-30-input"></td>
                    <td class="row-1-col-31"><input type="number" class="row-1-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17"><input type="number" class="row-2-col-17-input"></td>
                    <td class="row-2-col-18 freeDay"></td>
                    <td class="row-2-col-19 freeDay"></td>
                    <td class="row-2-col-20"><input type="number" class="row-2-col-20-input"></td>
                    <td class="row-2-col-21"><input type="number" class="row-2-col-21-input"></td>
                    <td class="row-2-col-22"><input type="number" class="row-2-col-22-input"></td>
                    <td class="row-2-col-23"><input type="number" class="row-2-col-23-input"></td>
                    <td class="row-2-col-24 freeDay"></td>
                    <td class="row-2-col-25 freeDay"></td>
                    <td class="row-2-col-26 freeDay"></td>
                    <td class="row-2-col-27"><input type="number" class="row-2-col-27-input"></td>
                    <td class="row-2-col-28"><input type="number" class="row-2-col-28-input"></td>
                    <td class="row-2-col-29"><input type="number" class="row-2-col-29-input"></td>
                    <td class="row-2-col-30"><input type="number" class="row-2-col-30-input"></td>
                    <td class="row-2-col-31"><input type="number" class="row-2-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17"></td>
                    <td class="row-3-col-18 freeDay"></td>
                    <td class="row-3-col-19 freeDay"></td>
                    <td class="row-3-col-20"></td>
                    <td class="row-3-col-21"></td>
                    <td class="row-3-col-22"></td>
                    <td class="row-3-col-23"></td>
                    <td class="row-3-col-24 freeDay"></td>
                    <td class="row-3-col-25 freeDay"></td>
                    <td class="row-3-col-26 freeDay"></td>
                    <td class="row-3-col-27"></td>
                    <td class="row-3-col-28"></td>
                    <td class="row-3-col-29"></td>
                    <td class="row-3-col-30"></td>
                    <td class="row-3-col-31"></td><td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17"></td>
                    <td class="row-4-col-18 freeDay"></td>
                    <td class="row-4-col-19 freeDay"></td>
                    <td class="row-4-col-20"></td>
                    <td class="row-4-col-21"></td>
                    <td class="row-4-col-22"></td>
                    <td class="row-4-col-23"></td>
                    <td class="row-4-col-24 freeDay"></td>
                    <td class="row-4-col-25 freeDay"></td>
                    <td class="row-4-col-26 freeDay"></td>
                    <td class="row-4-col-27"></td>
                    <td class="row-4-col-28"></td>
                    <td class="row-4-col-29"></td>
                    <td class="row-4-col-30"></td>
                    <td class="row-4-col-31"></td><td></td>
                </tr>
            `,
        Decembrie: `<tr class = "tableHeader">
                    <td></td>
                    <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td>
                    <td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-1 freeDay"></td>
                    <td class="row-0-col-2">8h</td>
                    <td class="row-0-col-3">8h</td>
                    <td class="row-0-col-4">8h</td>
                    <td class="row-0-col-5">8h</td>
                    <td class="row-0-col-6">8h</td>
                    <td class="row-0-col-7 freeDay"></td>
                    <td class="row-0-col-8 freeDay"></td>
                    <td class="row-0-col-9">8h</td>
                    <td class="row-0-col-10">8h</td>
                    <td class="row-0-col-11">8h</td>
                    <td class="row-0-col-12">8h</td>
                    <td class="row-0-col-13">8h</td>
                    <td class="row-0-col-14 freeDay"></td>
                    <td class="row-0-col-15 freeDay"></td>
                    <td class="row-0-col-16">8h</td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-1 freeDay"></td>
                    <td class="row-1-col-2"><input type="number" class="row-1-col-2-input"></td>
                    <td class="row-1-col-3"><input type="number" class="row-1-col-3-input"></td>
                    <td class="row-1-col-4"><input type="number" class="row-1-col-4-input"></td>
                    <td class="row-1-col-5"><input type="number" class="row-1-col-5-input"></td>
                    <td class="row-1-col-6"><input type="number" class="row-1-col-6-input"></td>
                    <td class="row-1-col-7 freeDay"></td>
                    <td class="row-1-col-8 freeDay"></td>
                    <td class="row-1-col-9"><input type="number" class="row-1-col-9-input"></td>
                    <td class="row-1-col-10"><input type="number" class="row-1-col-10-input"></td>
                    <td class="row-1-col-11"><input type="number" class="row-1-col-11-input"></td>
                    <td class="row-1-col-12"><input type="number" class="row-1-col-12-input"></td>
                    <td class="row-1-col-13"><input type="number" class="row-1-col-13-input"></td>
                    <td class="row-1-col-14 freeDay"></td>
                    <td class="row-1-col-15 freeDay"></td>
                    <td class="row-1-col-16"><input type="number" class="row-1-col-16-input"></td>
                    
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-1 freeDay"></td>
                    <td class="row-2-col-2"><input type="number" class="row-2-col-2-input"></td>
                    <td class="row-2-col-3"><input type="number" class="row-2-col-3-input"></td>
                    <td class="row-2-col-4"><input type="number" class="row-2-col-4-input"></td>
                    <td class="row-2-col-5"><input type="number" class="row-2-col-5-input"></td>
                    <td class="row-2-col-6"><input type="number" class="row-2-col-6-input"></td>
                    <td class="row-2-col-7 freeDay"></td>
                    <td class="row-2-col-8 freeDay"></td>
                    <td class="row-2-col-9"><input type="number" class="row-2-col-9-input"></td>
                    <td class="row-2-col-10"><input type="number" class="row-2-col-10-input"></td>
                    <td class="row-2-col-11"><input type="number" class="row-2-col-11-input"></td>
                    <td class="row-2-col-12"><input type="number" class="row-2-col-12-input"></td>
                    <td class="row-2-col-13"><input type="number" class="row-2-col-13-input"></td>
                    <td class="row-2-col-14 freeDay"></td>
                    <td class="row-2-col-15 freeDay"></td>
                    <td class="row-2-col-16"><input type="number" class="row-2-col-16-input"></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-1 freeDay"></td>
                    <td class="row-3-col-2"></td>
                    <td class="row-3-col-3"></td>
                    <td class="row-3-col-4"></td>
                    <td class="row-3-col-5"></td>
                    <td class="row-3-col-6"></td>
                    <td class="row-3-col-7 freeDay"></td>
                    <td class="row-3-col-8 freeDay"></td>
                    <td class="row-3-col-9"></td>
                    <td class="row-3-col-10"></td>
                    <td class="row-3-col-11"></td>
                    <td class="row-3-col-12"></td>
                    <td class="row-3-col-13"></td>
                    <td class="row-3-col-14 freeDay"></td>
                    <td class="row-3-col-15 freeDay"></td>
                    <td class="row-3-col-16"></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-1 freeDay"></td>
                    <td class="row-4-col-2"></td>
                    <td class="row-4-col-3"></td>
                    <td class="row-4-col-4"></td>
                    <td class="row-4-col-5"></td>
                    <td class="row-4-col-6"></td>
                    <td class="row-4-col-7 freeDay"></td>
                    <td class="row-4-col-8 freeDay"></td>
                    <td class="row-4-col-9"></td>
                    <td class="row-4-col-10"></td>
                    <td class="row-4-col-11"></td>
                    <td class="row-4-col-12"></td>
                    <td class="row-4-col-13"></td>
                    <td class="row-4-col-14 freeDay"></td>
                    <td class="row-4-col-15 freeDay"></td>
                    <td class="row-4-col-16"></td>
                </tr>
                <tr class = "tableHeader">
                    <td></td><td>17</td><td>18</td><td>19</td><td>20</td>
                    <td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td>
                </tr>
                <tr>
                    <td class="row-0-col-0">Daily norm</td>
                    <td class="row-0-col-17">8h</td>
                    <td class="row-0-col-18">8h</td>
                    <td class="row-0-col-19">8h</td>
                    <td class="row-0-col-20">8h</td>
                    <td class="row-0-col-21 freeDay"></td>
                    <td class="row-0-col-22 freeDay"></td>
                    <td class="row-0-col-23">8h</td>
                    <td class="row-0-col-24">8h</td>
                    <td class="row-0-col-25 freeDay"></td>
                    <td class="row-0-col-26 freeDay"></td>
                    <td class="row-0-col-27">8h</td>
                    <td class="row-0-col-28 freeDay"></td>
                    <td class="row-0-col-29 freeDay"></td>
                    <td class="row-0-col-30">8h</td>
                    <td class="row-0-col-31">8h</td><td></td>
                </tr>
                <tr>
                    <td class="row-1-col-0">Remote</td>
                    <td class="row-1-col-17"><input type="number" class="row-1-col-17-input"></td>
                    <td class="row-1-col-18"><input type="number" class="row-1-col-18-input"></td>
                    <td class="row-1-col-19"><input type="number" class="row-1-col-19-input"></td>
                    <td class="row-1-col-20"><input type="number" class="row-1-col-20-input"></td>
                    <td class="row-1-col-21 freeDay"></td>
                    <td class="row-1-col-22 freeDay"></td>
                    <td class="row-1-col-23"><input type="number" class="row-1-col-23-input"></td>
                    <td class="row-1-col-24"><input type="number" class="row-1-col-24-input"></td>
                    <td class="row-1-col-25 freeDay"></td>
                    <td class="row-1-col-26 freeDay"></td>
                    <td class="row-1-col-27"><input type="number" class="row-1-col-27-input"></td>
                    <td class="row-1-col-28 freeDay"></td>
                    <td class="row-1-col-29 freeDay"></td>
                    <td class="row-1-col-30"><input type="number" class="row-1-col-30-input"></td>
                    <td class="row-1-col-31"><input type="number" class="row-1-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-2-col-0">Office</td>
                    <td class="row-2-col-17"><input type="number" class="row-2-col-17-input"></td>
                    <td class="row-2-col-18"><input type="number" class="row-2-col-18-input"></td>
                    <td class="row-2-col-19"><input type="number" class="row-2-col-19-input"></td>
                    <td class="row-2-col-20"><input type="number" class="row-2-col-20-input"></td>
                    <td class="row-2-col-21 freeDay"></td>
                    <td class="row-2-col-22 freeDay"></td>
                    <td class="row-2-col-23"><input type="number" class="row-2-col-23-input"></td>
                    <td class="row-2-col-24"><input type="number" class="row-2-col-24-input"></td>
                    <td class="row-2-col-25 freeDay"></td>
                    <td class="row-2-col-26 freeDay"></td>
                    <td class="row-2-col-27"><input type="number" class="row-2-col-27-input"></td>
                    <td class="row-2-col-28 freeDay"></td>
                    <td class="row-2-col-29 freeDay"></td>
                    <td class="row-2-col-30"><input type="number" class="row-2-col-30-input"></td>
                    <td class="row-2-col-31"><input type="number" class="row-2-col-31-input"></td><td></td>
                </tr>
                <tr>
                    <td class="row-3-col-0">Total worked hours</td>
                    <td class="row-3-col-17"></td>
                    <td class="row-3-col-18"></td>
                    <td class="row-3-col-19"></td>
                    <td class="row-3-col-20"></td>
                    <td class="row-3-col-21 freeDay"></td>
                    <td class="row-3-col-22 freeDay"></td>
                    <td class="row-3-col-23"></td>
                    <td class="row-3-col-24"></td>
                    <td class="row-3-col-25 freeDay"></td>
                    <td class="row-3-col-26 freeDay"></td>
                    <td class="row-3-col-27"></td>
                    <td class="row-3-col-28 freeDay"></td>
                    <td class="row-3-col-29 freeDay"></td>
                    <td class="row-3-col-30"></td>
                    <td class="row-3-col-31"></td><td></td>
                </tr>
                <tr>
                    <td class="row-4-col-0">Anual Leave</td>
                    <td class="row-4-col-17"></td>
                    <td class="row-4-col-18"></td>
                    <td class="row-4-col-19"></td>
                    <td class="row-4-col-20"></td>
                    <td class="row-4-col-21 freeDay"></td>
                    <td class="row-4-col-22 freeDay"></td>
                    <td class="row-4-col-23"></td>
                    <td class="row-4-col-24"></td>
                    <td class="row-4-col-25 freeDay"></td>
                    <td class="row-4-col-26 freeDay"></td>
                    <td class="row-4-col-27"></td>
                    <td class="row-4-col-28 freeDay"></td>
                    <td class="row-4-col-29 freeDay"></td>
                    <td class="row-4-col-30"></td>
                    <td class="row-4-col-31"></td><td></td>
                </tr>
            
        `
    }

    return tables[month];
}

module.exports = { getTable };