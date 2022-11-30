import React from "react";
import { Button, Card, Input, Select } from "antd";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const Lesson = () => {
  return (
    <div>
      <Card
        title={<h3 className="title-category">Create Lesson</h3>}
        extra={
          <div className="search-course">
            <Input placeholder="Search Name..." />
            <Select
              className="search-cat"
              style={{ width: "100%", height: "5vh" }}
              showSearch
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.name ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.name ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.name ?? "").toLowerCase())
              }
            />

            <Button className="btn-cate" type={"primary"}>
              <Link
                to="/admin/lesson/add"
                style={{ display: "flex", alignItems: "center" }}
              >
                <IoIosAddCircleOutline className="icon-c" />
                New Lesson
              </Link>
            </Button>
          </div>
        }
      >




      </Card>
    </div>
  );
};

export default Lesson;
