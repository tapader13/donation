//navigate to blog
document.getElementById('blog').addEventListener('click', function () {
  window.location.href = './blog.html';
});

//toggle
const toggle = document.querySelectorAll('.swicher');
let lastActive = 'Donation';
let lastItem = document.querySelectorAll('.swicher')[0];
for (const iterator of toggle) {
  iterator.addEventListener('click', function () {
    const text = iterator.innerText;
    if (lastActive === text) {
      iterator.style.backgroundColor = 'rgb(180, 244, 97)';
      lastActive = text;
      lastItem = iterator;
    } else {
      lastItem.style.backgroundColor = 'white';
      iterator.style.backgroundColor = 'rgb(180, 244, 97)';
      lastActive = text;
      lastItem = iterator;
    }
  });
}

//function for get inp val
function getInpVal(value) {
  const val = document.getElementById(value).value;
  return parseFloat(val);
}

//function for get total donate in specific campaign
function getTotalDonate(value) {
  const val = document.getElementById(value).textContent;
  return parseFloat(val);
}

//function for set history
function setHistory(amount, title) {
  const tit = document.getElementById(title).textContent;
  const data = ` <div
          class="border border-solid border-[rgba(17,17,17,0.1)] rounded-2xl p-8 mt-8"
        >
          <h3
            class="text-[rgb(17,17,17)] font-bold text-[20px] leading-[30px] font-lexend"
          >
            ${amount} Taka is Donated for ${tit}
          </h3>
          <p
            class="mt-4 text-[16px] font-light leading-[26px] font-lexend text-[rgba(17,17,17,0.7)]"
          >
            ${new Date().toString()}
          </p>
        </div>`;
  return data;
}

//donate work
document
  .getElementById('donate_noakhali')
  .addEventListener('click', function () {
    const inp_val = getInpVal('amount_inp');
    const tot_donate = getTotalDonate('tot_donate');
    document.getElementById('tot_donate').textContent = tot_donate + inp_val;
    const total_balnce = getTotalDonate('balance');
    document.getElementById('balance').textContent = total_balnce - inp_val;
    document.getElementById('history').innerHTML += setHistory(
      inp_val,
      'title'
    );
  });

document
  .getElementById('donate_protest')
  .addEventListener('click', function () {
    const inp_val = getInpVal('amount_inp2');
    const tot_donate = getTotalDonate('tot_donate2');
    document.getElementById('tot_donate2').textContent = tot_donate + inp_val;
    const total_balnce = getTotalDonate('balance');
    document.getElementById('balance').textContent = total_balnce - inp_val;
    document.getElementById('history').innerHTML += setHistory(
      inp_val,
      'title2'
    );
  });

document.getElementById('donate_feni').addEventListener('click', function () {
  const inp_val = getInpVal('amount_inp1');
  const total_balnce = getTotalDonate('balance');
  if (inp_val > total_balnce) {
    alert('insufficent balance');
    return;
  }
  const tot_donate = getTotalDonate('tot_donate1');
  document.getElementById('tot_donate1').textContent = tot_donate + inp_val;

  document.getElementById('balance').textContent = total_balnce - inp_val;
  document.getElementById('history').innerHTML += setHistory(inp_val, 'title1');
});
