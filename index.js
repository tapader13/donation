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
  return Number(val);
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
           Date: ${new Date().toString()}
          </p>
        </div>`;
  return data;
}

//donate work
function handleDonation(inputId, totalDonateId, titleId) {
  const inp_val = getInpVal(inputId);
  const total_balnce = getTotalDonate('balance');
  if (isNaN(inp_val) || inp_val === 0 || inp_val < 0) {
    alert('Invalid input');
    return;
  }
  if (inp_val > total_balnce) {
    alert('Insufficient balance');
    return;
  }
  const tot_donate = getTotalDonate(totalDonateId);
  document.getElementById(totalDonateId).textContent = tot_donate + inp_val;
  document.getElementById('balance').textContent = total_balnce - inp_val;
  document.getElementById('history').innerHTML += setHistory(inp_val, titleId);
  document.getElementById('my_modal_1').showModal();
}

document
  .getElementById('donate_noakhali')
  .addEventListener('click', function () {
    handleDonation('amount_inp', 'tot_donate', 'title');
  });

document
  .getElementById('donate_protest')
  .addEventListener('click', function () {
    handleDonation('amount_inp2', 'tot_donate2', 'title2');
  });

document.getElementById('donate_feni').addEventListener('click', function () {
  handleDonation('amount_inp1', 'tot_donate1', 'title1');
});

//navigate between button
document.getElementById('dont').addEventListener('click', function () {
  document.getElementById('dont_card').classList.remove('hidden');
  document.getElementById('history').classList.add('hidden');
});
document.getElementById('hist').addEventListener('click', function () {
  document.getElementById('dont_card').classList.add('hidden');
  document.getElementById('history').classList.remove('hidden');
});
