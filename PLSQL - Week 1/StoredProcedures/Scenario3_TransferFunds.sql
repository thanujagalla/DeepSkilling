CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account  IN Accounts.AccountID%TYPE,
    p_to_account    IN Accounts.AccountID%TYPE,
    p_amount        IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account
    FOR UPDATE;

    IF v_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Insufficient balance. Transfer failed.');
    ELSE
        -- Debit source account
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        -- Credit destination account
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        DBMS_OUTPUT.PUT_LINE('Transfer successful.');
    END IF;

    COMMIT;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Invalid account number.');
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error occurred during transfer.');
        ROLLBACK;
END;
/
