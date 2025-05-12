document.addEventListener('DOMContentLoaded', function () {
    const transactionContainer = document.querySelector('.about__right_side');
    const maxTransactions = 3;

    const amounts = [0.5, 0.8, 1.2, 1.5, 2.0, 2.2, 3.0, 3.5, 4.0, 5.0];
    const times = ['1 min', '2 min', '5 min', '6 min', '10 min', '12 min', '15 min', '20 min', '30 min', '1 hour'];
    const addresses = [
        '7S56xT19N9NV9Sjr5wsYvJFFDSLKM2',
        '8H23xR45N2NV9Sjr5wsYvJFFDSLKM3',
        '9G78xZ67N3NV9Sjr5wsYvJFFDSLKM4',
        '6F34xQ12N4NV9Sjr5wsYvJFFDSLKM5',
        '5D90xP89N5NV9Sjr5wsYvJFFDSLKM6',
        '4B12xW34N6NV9Sjr5wsYvJFFDSLKM7',
        '3A45xY78N7NV9Sjr5wsYvJFFDSLKM8',
        '2C67xU90N8NV9Sjr5wsYvJFFDSLKM9',
        '1E89xV12N9NV9Sjr5wsYvJFFDSLKM0',
        '0D23xT45N1NV9Sjr5wsYvJFFDSLKM1'
    ];

    const initialTransactions = transactionContainer.querySelectorAll('.transaction');

    function createTransaction() {
        const amount = amounts[Math.floor(Math.random() * amounts.length)];
        const time = times[Math.floor(Math.random() * times.length)];
        const address = addresses[Math.floor(Math.random() * addresses.length)];

        const transaction = document.createElement('div');
        transaction.className = 'transaction';
        transaction.innerHTML = `
            <div class="transation__logo">
                <img src="./assets/img/Sol.svg" alt="">
            </div>
            <div class="transaction__content">
                <div class="amount">
                    Transaction sent: -${amount} SOL
                </div>
                <div class="transction__info">
                    <div class="transaction__address">
                        ${address}
                    </div>
                    <div class="transaction__time">
                        ${time}
                    </div>
                </div>
            </div>
        `;

        transactionContainer.prepend(transaction);

        setTimeout(() => {
            transaction.classList.add('new-transaction');
        }, 50);

        const transactions = transactionContainer.querySelectorAll('.transaction');
        if (transactions.length > maxTransactions) {
            const lastTransaction = transactions[transactions.length - 1];

            lastTransaction.remove();
        }
    }

    function updateTransactionFeed() {
        const delay = Math.random() * 3000 + 3000;

        setTimeout(() => {
            createTransaction();
            updateTransactionFeed();
        }, delay);
    }

    setTimeout(updateTransactionFeed, 2000);
});