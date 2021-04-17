import styled from 'styled-components';

export const TaskContainer = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .task-check {
    display: flex;
    align-items: center;

    &.completed {
      p {
        text-decoration: line-through;
      }
    }

    .checkbox-container {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 10px;

      input[type='checkbox'] {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
        left: 0;
        cursor: pointer;

        &:checked {
          & ~ .checkmark {
            background: #34C37A;
            border: 1px solid #34C37A;
          }

          & ~ .checkmark:after {
            display: block;
          }
        }
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid #007bff;
        border-radius: 2px;

        &:after {
          content: '';
          position: absolute;
          display: none;
          left: 7px;
          top: 3px;
          height: 8px;
          width: 4px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }

  .action-buttons {
    button:nth-child(1) {
      margin-right: 10px;

      &:hover {
        background-color: #ffc107;
        border: 1px solid #ffc107;
        color: initial;
      }
    }

    button:nth-child(2) {
      &:hover {
        background-color: red;
        border: 1px solid red;
      }
    }
  }
`;