import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUfData } from "../../redux/selectors/index";
import { apiGetState } from "../../services/apiService";
import { getStateData, setSelectedState } from "../../redux/actions/index";

function SelectState() {
  const stateData = useSelector(getUfData);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getApiData() {
      try {
        const states = await apiGetState();
        dispatch(getStateData(states));
      } catch (error) {
        console.log(error.message);
      }
    }
    getApiData();
    
  }, [dispatch]);

  function handleSelectChange(e) {
    dispatch(setSelectedState(e.target.value));
  }

  return (
    <div>
      <div>
        {
          stateData?.length > 0 ? (
            <div className="custom-select">
              <span className="arrow active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </span>
              <select
                name="Select States"
                onChange={handleSelectChange}
                defaultValue="zero"
              >
                <option value="zero" disabled>
                  Escolha um Estado
                </option>

                {stateData?.map((item, id) => {
                  return (
                    <option value={item.id} key={id}>
                      {item.nome}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null
    
        }
      </div>
    </div>
  );
}

export default SelectState;
