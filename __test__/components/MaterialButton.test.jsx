import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MaterialButton from "../../components/MaterialButton";

describe("MaterialButton", () => {
  const setUp = (customProps) => {
    render(
      <MaterialButton
        name=""
        previewImgSrc="/mock.png"
        onClick={() => {}}
        {...customProps}
      />
    );

    return {
      user: userEvent.setup(),
    };
  };

  it("should render the given preview img", () => {
    const name = "mockName";
    const previewImgSrc = "/mockImage.png";
    setUp({ previewImgSrc, name });

    expect(
      screen.getByAltText(name, { exact: false }).getAttribute("src")
    ).toMatch("mockImage.png");
  });

  it("should not render the name if not selected", () => {
    const name = "mockName";
    setUp({ name, selected: false });

    expect(screen.queryByText(name)).not.toBeInTheDocument();
  });

  it("should render the name if selected", () => {
    const name = "mockName";
    setUp({ name, selected: true });

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = jest.fn();
    const { user } = setUp({ onClick });

    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalled();
  });
});
