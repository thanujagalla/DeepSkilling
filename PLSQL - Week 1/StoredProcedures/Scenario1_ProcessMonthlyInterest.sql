CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';

    DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');

    COMMIT;
END;
/
